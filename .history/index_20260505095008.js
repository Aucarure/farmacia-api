require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models');

const app = express();
app.use(express.json());

app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/medicamentos', require('./src/routes/medicamentoRoutes'));
app.use('/api/compras', require('./src/routes/compraRoutes'));

sequelize.sync({ alter: true })
  .then(() => console.log('DB conectada y tablas sincronizadas'))
  .catch(err => console.error('Error DB:', err));

app.listen(process.env.PORT, () => console.log(`Servidor en puerto ${process.env.PORT}`));