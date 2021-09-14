var express = require('express');
var router = express.Router();
var promocionesModel = require('./../models/promocionesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer')

router.get('/promociones', async function (req, res, next) {
    let promos = await promocionesModel.getPromos();

    promos = promos.map(promo => {
        if (promo.image) {
            const imagen = cloudinary.url(promo.image, {
                width: 200,
                height: 200,
                crop: 'fill'
            });
            return {
                ...promo,
                imagen
            }
        } else {
            return {
                ...promo,
                imagen: ''
            }
        }
    });

    res.json(promos);
});

router.post('/inscripcion', async (req, res) => {
    const mail = {
        to: 'oliveriobaroni@gmail.com',
        subject: 'Inscripcion Vibra',
        html: `${req.body.nombre} se contactó a traves de 
        la web y quiere mas informacion a este correo: 
        ${req.body.email} <br> Ademas, hizo el siguiente 
        comentario: ${req.body.mensaje} <br> Su tel es: 
        ${req.body.telefono}` 
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
})

module.exports = router;