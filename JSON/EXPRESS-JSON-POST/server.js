const express = require('express');
const Ajv = require('ajv');
const schema1 = require('./schema1.json');
const schema2 = require('./schema2.json');

const app = express();
const ajv = new Ajv();

const validate1 = ajv.compile(schema1);
const validate2 = ajv.compile(schema2);

app.use(express.json());

app.post('/route1', (req, res) => {
  const isValid = validate1(req.body);
  if (isValid) {
    res.status(200).send('JSON válido');
  } else {
    res.status(400).send('JSON inválido');
  }
});

app.post('/route2', (req, res) => {
  const isValid = validate2(req.body);
  if (isValid) {
    res.status(200).send('JSON válido');
  } else {
    res.status(400).send('JSON inválido');
  }
});

app.listen(3000, () => console.log('Aplicación iniciada en http://localhost:3000'));

