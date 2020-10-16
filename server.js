import express from 'express';
import axios from 'axios';

const app = express();

app.use((res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*")
  next();
});


app.get('/date', (req, res) => {
  if (req.query.date)  
    axios.get(`https://svatky.vanio.cz/api/${req.query.date}`)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
  else
     res.send('incorrect query');
  
});


const port = 5000;
app.listen(port, () => console.log(`Server is lisening on port ${port}`));
