const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const sequelize = new Sequelize('ficha9', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Modelo Car
const Car = sequelize.define('Car', {
    Brand: { type: DataTypes.STRING },
    Model: { type: DataTypes.STRING },
    LicensePlate: { type: DataTypes.STRING },
    Color: { type: DataTypes.STRING },
    Year: { type: DataTypes.INTEGER },
    Power: { type: DataTypes.INTEGER },
    Displacement: { type: DataTypes.FLOAT }
  }, {
    timestamps: false
  });
  
  // Sincronizar modelo com base de dados
  sequelize.sync().then(() => {
    console.log('Base de dados sincronizada.');
  });

  Car.bulkCreate([
    { Brand: 'Opel', Model: 'Corsa', LicensePlate: 'AA-11-AA', Color: 'Azul', Year: 1998, Power: 90, Displacement: 1.6 },
    { Brand: 'Honda', Model: 'Civic', LicensePlate: 'BB-22-BB', Color: 'Cinzento', Year: 1994, Power: 90, Displacement: 1.5 },
    { Brand: 'Renault', Model: 'Clio', LicensePlate: 'CC-33-CC', Color: 'Branco', Year: 2003, Power: 58, Displacement: 1.2 },
    { Brand: 'Alfa Romeo', Model: '147', LicensePlate: 'DD-44-DD', Color: 'Vermelho', Year: 2001, Power: 115, Displacement: 1.9 }
  ], { ignoreDuplicates: true } )
  .then(function () {
    return Car.findAll();
  }).then(function (cars) {
    console.log(cars);
  });
  
  // a) Listar todos os carros
  app.get('/cars', async (req, res) => {
    const cars = await Car.findAll();
    res.json(cars);
  });
  
  // b) Adicionar novo carro
  app.post('/cars', async (req, res) => {
    const newCar = await Car.create(req.body);
    res.json({ id: newCar.id });
  });
  
  // c) Apagar por ID (body)
  app.delete('/cars', async (req, res) => {
    const { id } = req.body;
    const result = await Car.destroy({ where: { id } });
    if (result === 0) return res.status(404).json({ error: 'Carro não encontrado' });
    res.json({ linhasAfetadas: result });
  });
  
  // d) Apagar por matrícula (params)
  app.delete('/cars/:plate', async (req, res) => {
    const result = await Car.destroy({ where: { LicensePlate: req.params.plate } });
    if (result === 0) return res.status(404).json({ error: 'Carro não encontrado' });
    res.json({ linhasAfetadas: result });
  });
  
  // e) Selecionar carro por ID (query)
  app.get('/cars/:id', async (req, res) => {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).json({ error: 'Carro não encontrado' });
    res.json(car);
  });
  
  // f) Selecionar por marca e modelo
  app.get('/cars/:brand/:model', async (req, res) => {
    const cars = await Car.findAll({
      where: { Brand: req.params.brand, Model: req.params.model }
    });
    if (cars.length === 0) return res.status(404).json({ error: 'Nenhum carro encontrado' });
    res.json(cars);
  });
  
  // g) Alterar carro por ID
  app.put('/cars/:id', async (req, res) => {
    const [updated] = await Car.update(req.body, { where: { id: req.params.id } });
    if (updated === 0) return res.status(404).json({ error: 'Carro não encontrado' });
    const updatedCar = await Car.findByPk(req.params.id);
    res.json(updatedCar);
  });
  
  app.listen(port, () => {
    console.log(`Servidor a correr em http://localhost:${port}`);
  });