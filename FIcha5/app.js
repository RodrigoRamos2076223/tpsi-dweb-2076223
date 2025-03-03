const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000

app.use(express.json());

var fileContent = fs.readFileSync("./data.json")
var dataObj = JSON.parse(fileContent);

//apagar person existente
app.delete('/users/:id', (req, res) => {
  var id = req.params.id
  res.send(dataObj);
})

//endpoint
app.get('/users', (req, res) => {
  res.send(dataObj);
})

//adicionar nova person
app.post('/users', (req, res) => {
  var newPerson = req.body;
  dataObj.data.push(newPerson);
  res.send("New person was added");
})


app.listen(port, () => {
  console.log(`Servidor ligou! ${port}`)
})