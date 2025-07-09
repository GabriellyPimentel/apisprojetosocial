const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Configurar CORS de forma dinâmica e compatível com Render
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3002',
  'https://apisprojetosocial-1u6r.vercel.app'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
