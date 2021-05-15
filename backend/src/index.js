const express = require('express');
require('./db/mongoose');

const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

app.get('/', (req, res) => {
    console.log(req.headers);
    res.send('SafeHeart Primary Service');
  });
