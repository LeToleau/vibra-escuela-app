var express = require('express');
var router = express.Router();
var promocionesModel = require('./../../models/promocionesModel');
var util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
require('express-session');
const destroy = util.promisify(cloudinary.uploader.destroy)


router.get('/', async function (req, res, next) {
    var promos = await promocionesModel.getPromos();

    promos = promos.map(promo => {
        if (promo.image) {
            const imagen = cloudinary.image(promo.image, {
                width: 50,
                height: 50,
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
    })

    res.render('admin/promociones', { 
        layout: 'admin/layout',  
        usuario: req.session.nombre,
        promos
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    let promo = await promocionesModel.getPromoById(id);
    if (promo.image) {
        await (destroy(promo.image));
    }

    console.log(id);
    await promocionesModel.deletePromoById(id);
    res.redirect('/admin/promociones')
});

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let promo = await promocionesModel.getPromoById(id);
    console.log(promo);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        promo
    })
});

router.post('/agregar', async (req, res, next) => {
    try {
        let title = req.body.title;
        let description = req.body.description;
        let price = req.body.price;
        var image = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            image = (await uploader(imagen.tempFilePath)).public_id;
        } 
        if (req.body.title != "" && req.body.description != "" && req.body.price != ""){
            // await novedadesModel.insertNovedad({...req.body, img_id}
            await promocionesModel.insertPromo({
                title,
                description,
                price,
                image
            });
            res.redirect('/admin/promociones')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargó la novedad'
        });
    }
});

router.post('/modificar', async (req, res, next) => {
    try {
        let image = req.body.img_original;
        let delete_img_prev = false;
        if (req.body.img_delete === "1") {
            image = null;
            delete_img_prev = true;
            console.log(image)
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen
                image = (await uploader(imagen.tempFilePath)).public_id;
                delete_img_prev = true;
            }
        }
        if (delete_img_prev && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        let obj = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image
        }

        await promocionesModel.modificarPromoById(obj, req.body.id);
        res.redirect('/admin/promociones');

    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true, message: 'No se modificó la Promocion'
        });
    }
});

module.exports = router