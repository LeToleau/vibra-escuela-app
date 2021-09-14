var pool = require('./db');

async function getPromos() {
    var query = 'SELECT id_promo, title, description, price, image FROM promos ORDER BY id_promo ASC';
    var rows = await pool.query(query);
    return rows;
}

async function insertPromo(obj) {
    try {
        var query = "insert into promos set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deletePromoById(id) {
    var query = "delete from promos where id_promo = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getPromoById(id) {
    var query = "select * from promos where id_promo = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarPromoById(obj, id) {
    try {
        var query = "update promos set ? where id_promo = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}
module.exports = { getPromos, deletePromoById, insertPromo, getPromoById, modificarPromoById }