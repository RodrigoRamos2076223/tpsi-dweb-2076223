const fs = require('fs');
const express = require('express');
const { json } = require('express');
const app = express();
const port = 3000

app.use(express.json());

var fileContent = fs.readFileSync("./data.json")
var dataObj = JSON.parse(fileContent);

//encontrar person existente pelo id
app.get('/users/:id', (req, res) => {
  var id = req.params.id
  for (let i = 0; i < dataObj.data.length; i++) {
    const person = dataObj.data[i];
    if (person.id == id) {
      res.send(person);
    }
  }
  res.send("id nao encontrado");
});

//apagar person existente pelo id
app.delete('/users/:id', (req, res) => {
 var id = req.params.id
 var result = dataObj.data.filter((person) => person.id != id );

if (result.length == dataObj.data.length) {
  res.status(404).send("id nao encontrado")
}else{
  dataObj.data = result;
  res.send("ID: " + id + "foi apagado")
}

});

//atualizar person
app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var details = req.body;
  for (let i = 0; i < dataObj.data.length; i++) {
    if (dataObj.data[0].id == id) {
      dataObj.data[0] = details
    }
    
  }


});

//mostra todos as persons
app.get('/users', (req, res) => {
  res.send(dataObj);
})

//adicionar nova person
app.post('/users', (req, res) => {
  var newPerson = req.body;
  dataObj.data.push(newPerson);
  res.send("Nova pessoa adicionada" + JSON.stringify(newPerson));
})


app.listen(port, () => {
  console.log(`Servidor ligou! ${port}`)
})