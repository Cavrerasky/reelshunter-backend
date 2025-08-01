const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let waitlist = [];

// Ruta para recibir correo
app.post('/api/join', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email missing' });
  }
  waitlist.push(email);
  return res.json({ success: true, email });
});

// Ruta para ver la lista
app.get('/api/list', (req, res) => {
  return res.json(waitlist);
});

// Usa el puerto que da Render o el 4000 si estás en local
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
