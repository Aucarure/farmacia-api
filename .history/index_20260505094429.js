require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models');

const app = express();
app.use(express.json());

sequelize.sync({ alter: true })
  .then(() => console.log('DB conectada y tablas sincronizadas'))
  .catch(err => console.error('Error DB:', err));

app.listen(process.env.PORT, () => console.log(`Servidor en puerto ${process.env.PORT}`));