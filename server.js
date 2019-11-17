const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '/public/dist')));



app.get(' * ', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/public/dist/index.html'));
});


app.listen(PORT, () =>
  console.log(`AW YEEEE, Successfully connected to PORT: ${PORT}`)
);
