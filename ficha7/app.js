const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000
app.use(express.json());


var mysql = require('mysql');
const { response } = require('../ficha7/app');
const { connect } = require('http2');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database: 'ficha7'
});



connection.connect()

app.get('/persons', (req, res) => {
    var {id, firstname, lastname, profession, age} = req.body;
    connection.query('SELECT * FROM persons', function(error, results, fields){
        if (error) throw error 

        res.send(results);
    });
  });

  app.post('/persons', (req, res) => {
    var {id, firstname, lastname, profession, age} = req.body;
    connection.query('INSERT INTO persons(firstname, lastname, profession, age) values ("Rodri", "Sticks","student", 19)', function(error, results, fields){
        if (error) throw error

        res.send("User inserted with id: " + res.insertID);
    });
  });

  app.delete('/persons', (req, res) => {
    var {id, firstname, lastname, profession, age} = req.body;
    connection.query('DELETE FROM persons where id = 2', function(error, results, fields){
        if (error) throw error

        res.send(results)
    });
});

app.get('/persons/:id', (req, res) => {
    var {id, firstname, lastname, profession, age} = req.body;
    connection.query('SELECT * FROM persons WHERE id = 3', function(error, results, fields){
        if (error) throw error 

        res.send(results);
    });
  });

app.listen(port, () => {
    console.log(`Servidor ligou! ${port}`)
  })