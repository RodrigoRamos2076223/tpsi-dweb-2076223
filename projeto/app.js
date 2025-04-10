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
        
        res.send("Produto inserido com sucesso com o id: " + results.insertId);
    });
});

app.get('/product/departamento/:dep', (req, res) => {
    var dep = req.params.dep;
    connection.query('SELECT * FROM product WHERE department = ?', [dep], function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });
});

app.put('/product/desconto', (req, res) => {
    var id = req.query.id;
    var percentagem = req.query.percentagem;
    connection.query('UPDATE product SET price = price - (price * ? / 100) WHERE id = ?', [percentagem, id], function (error, results, fields) {
        if (error) {
            res.send("Erro ao aplicar desconto");
        } else {
            res.send("Desconto aplicado com sucesso a " + percentagem + "% no produto com id: " + id);
        }
    });
});

app.get('/product/data/:data', (req, res) => {
    var data = req.params.data;
    if (!data) {
        res.status(400).send("A data tem de ser no formato AAAA-MM-DD");
    }
    connection.query('SELECT * FROM product WHERE DATE(created) = ?', [data], function (error, results, fields) {
        if (error) throw error

        res.send(results);
    });
});

// ------------------------ Parte B ------------------------ 

app.get('/product/id', (req, res) => {
    var id = req.query.id;
    connection.query('SELECT * FROM product WHERE id = ?', [id], function (error, results, fields) {
        if (error) throw error;
        
        res.send(results);
    });
});

app.delete('/product/delete/:id', (req, res) => {
     var id  = req.params.id;
     connection.query('DELETE FROM product WHERE id = ?', [id], function (error, results, fields) {
        if (error) {
            res.send("Erro ao apagar produto com id: " + id);
        } else {
            res.send("Produto apagado com sucesso");
        }
     });
 });

app.post('/product/filtrar', (req, res) => {
    var { palavraChave } = req.body;
    connection.query('SELECT * FROM product WHERE description LIKE ?', [`%${palavraChave}%`], function (error, results, fields) {
        if (error) throw error

        res.send(results);
    });
});

app.put('/product/comentario', (req, res) => {
    var { id, comentario } = req.body;
    connection.query('SELECT comment FROM product WHERE id = ?', [id], function (error, results, fields) {
        if (error) throw error;

        var comentarios = [];
        if (results[0].comment) {
            comentarios = JSON.parse(results[0].comment);
        }
        comentarios.push(comentario);
        connection.query('UPDATE product SET comment = ? WHERE id = ?', [JSON.stringify(comentarios), id], function (error, results, fields) {
            if (error) throw error;

            connection.query('SELECT * FROM product WHERE id = ?', [id], function (error, results, fields) {
                if (error) throw error;

                res.send(results[0]);
            });
        });
    });
});

app.get('/product/ordenar/preco', (req, res) => {
    connection.query('SELECT * FROM product', function (error, results, fields) {
        if (error) throw error;

        results.sort(function(a, b) {
            return a.price - b.price;
        });
        res.send(results);
    });
});


app.listen(port, () => {
    console.log(`Servidor ligou! ${port}`)
})