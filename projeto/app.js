const mysql = require('mysql');
const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3000;
const app = express();

const connection = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'projeto'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

connection.query('SELECT * FROM product', (error, results, fields) => {
    if (error) {
        console.error('Query error:', error);
        return;
    }
    console.log('Query results:', results);
});

connection.end((err) => {
    if (err) {
        console.error('Error ending connection:', err);
        return;
    }
    console.log('MySQL connection closed');
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});