const express = require('express');
const axios = require('axios');

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*")
  next();
});


app.get('/date', (req, res) => {
  
  axios.get(`https://svatky.vanio.cz/api/${req.query.date}`)
    .then(response => res.send(response.data))
    .catch(error => {
      console.log(error);
      res.status(500)
      res.render('error', { error: err })
    });
  
});


const port = 5000;
app.listen(port, () => console.log(`Server is lisening on port ${port}`));
