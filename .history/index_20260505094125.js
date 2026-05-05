require('dotenv').config();
const express = require('express');
const sequelize = require('./src/config/database');

const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log('DB conectada'))
  .catch(err => console.error('Error DB:', err));

app.listen(process.env.PORT, () => {
  console.log(`Servidor en puerto ${process.env.PORT}`);
});