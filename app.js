const express = require('express');
const app = express();
const form = app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended:true}));


app.get('/', (req, res)=>{
  res.send(form)
});

app.post('/forms/enviar/',(req,res)=>{
  var nombre = req.body.nombre
  res.send("<h1>Hola " +nombre+"!<h1>")
})

app.listen(3000, () => {
    return console.log('Listening on port 3000!');
  });

