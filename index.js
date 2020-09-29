const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers.js")
// Using hbs as the default view engine requires just one line of code in your app setup. This will render .hbs files when res.render is called.
//Express HBS ENGINE

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");




//middlewares para filtrar por rutas,es una isntruccion o calback que se ejecuta siempre
//simpre sin iportar la url de la peticion, "filtra las peticiones"
//hace la carpeta public de dominio publico

app.use(express.static(__dirname + "/public"));
//localhost:3000/assets/css/bootstrap.min.css existe, dentro de public, cuakqueir persona peude acceder

//al utilizar un template engine podemos renderizar o mandar la pag completamente con res.render

app.get("/home", function (req, res) {
  //metodo para renderizar con le motor especificado, se le puede pasar como argumento un objeto
  res.render("home")
});

app.get("/about", function (req, res) {
  res.render("about", {});
});

app.listen(3000, () => {
  console.log("listen in port 3000");
});
