const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000
app.use(express.json());


var mysql = require('mysql');
const { response } = require('../projeto/app');
const { connect } = require('http2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'projeto'
});



connection.connect()

// ------------------------ Parte A ------------------------ 

app.get('/product', (req, res) => {
    connection.query('SELECT * FROM product', function (error, results, fields) {
        if (error) throw error

        res.send(results);
    });
});

app.post('/product', (req, res) => {
    var { name, barcode, department, review, description, weight, price, created, comment } = req.body;
    connection.query(`INSERT INTO product (name, barcode, department, review, description, weight, price, created, comment) VALUES (?, ?, ?, ?, ?, ?, ?, CURTIME(), ?)`, [name, barcode, department, review, description, weight, price, JSON.stringify(comment)], function (error, results, fields) {
        if (error) throw error

        res.send("User inserted with id: " + res.insertID);
    });
});

app.put('/product/desconto', (req, res) => {
    var { id, percentagem } = req.body;
    if (!id || !percentagem) {
        res.status(400).send("ID and Desconto are required");
        return;
    }
    connection.query('UPDATE product SET price = price - (price * ? / 100) WHERE id = ?', [percentagem, id], function (error, results, fields) {
        if (error) {
            res.send("Erro ao aplicar desconto");
        } else {
            res.send("Desconto aplicado com sucesso a " + percentagem + "% no produto com id: " + id);
        }
    });
});

app.get('/product/:data', (req, res) => {
    var data = req.params.data;
    if (!data) {
        res.status(400).send("A data tem de ser no formato AAAA-MM-DD");
    }
    connection.query('SELECT * FROM product WHERE created = ?', [data], function (error, results, fields) {
        if (error) {
            res.send("Erro ao procurar o produto com a data: " + data);
        } else {
            res.send("Produto encontrado com a data: " + data + ": " + res.json(results));
        }
    });
});
// app.delete('/persons', (req, res) => {
//     var { id, firstname, lastname, profession, age } = req.body;
//     connection.query('DELETE FROM persons where id = 2', function (error, results, fields) {
//         if (error) throw error

//         res.send(results)
//     });
// });

// app.get('/persons/:id', (req, res) => {
//     var { id, firstname, lastname, profession, age } = req.body;
//     connection.query('SELECT * FROM persons WHERE id = 3', function (error, results, fields) {
//         if (error) throw error

//         res.send(results);
//     });
// });

app.listen(port, () => {
    console.log(`Servidor ligou! ${port}`)
})