const servidorWeb = require("express");

const app = servidorWeb();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send("Hello World!, Estas consultando la raiz de la API");
})

app.get('/personas', (req, res) => {
    let persona = {
        "nombre": "Juan Carlos",
        "apellido": "Zambrano",
        "estadoCivil": "Casado",
        "edad": 30,
        "tieneHijos": true,
        "medico": "{ \"Id\" : 123, \"nombre\" : \"Medico 1\", \"licencia : \"12345678\"}"
      }
    res.send(persona);
  })

app.listen(puerto, () => {
    console.log("El servidor se está ejecutando en el puerto " + puerto);
    console.log(`Example app listening on port ${puerto}`);
})
