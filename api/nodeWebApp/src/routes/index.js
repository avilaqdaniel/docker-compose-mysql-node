const {Router} = require('express');
const router = Router();
async const connection = await require('../database/database')

router.get('/', (req, res) => {
    res.send('Hola, Miguel');
});

router.get('/user', (req, res) => {
    connection.query('SELECT * FROM user_app', (error, rows, fields) => {
        if(!error){
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});

router.get('/user:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    connection.query('SELECT * FROM user_app WHERE id_user = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
});

router.post('/user', (req, res) => {
    const {id, name, email} = req.body;
    const query = `CALL userAddOrEdit(?, ?, ?);`;
    connection.query(query, [id, name, email], (err, rows, fields) => {
        if(!err){
            res.json({message: 'Usuario agregado'});
        } else {
            console.log(err);
        }
    });
});

router.put('/user:id', (req, res) => {
    const {name, email} = req.body;
    const {id} = req.params;
    const query =`CALL userAddOrEdit(?, ?, ?);`;
    connection.query(query, [id, name, email], (err, rows, fields) => {
        if(!err){
            res.json({message: 'Usuario actualizado'});
        } else {
            console.log(err);
        }
    });
});

router.delete('/user:id', (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM user_app WHERE id_user = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({message: 'Usuario eliminado'});
        } else {
            console.log(err);
        }
    })
});

module.exports = router;