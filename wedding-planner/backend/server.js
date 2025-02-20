// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
  const { name, city, date, menuPreferences, email, phone } = req.body;
  console.log('Data received:', { name, city, date, menuPreferences, email, phone });
  res.status(200).send({ message: 'Data received successfully!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
