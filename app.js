require("dotenv").config();

const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// Servir conteudo estático, aqui serve o / com o index.html
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("home", {
//     nombre: "Marshal Mori Cavalheiro",
//     titulo: "App com Node",
//   });
// });

// app.get("/generic", (req, res) => {
//   res.render("generic", {
//     nombre: "Marshal Mori Cavalheiro",
//     titulo: "App com Node",
//   });
// });

// app.get("/elements", (req, res) => {
//   res.render("elements", {
//     nombre: "Marshal Mori Cavalheiro",
//     titulo: "App com Node",
//   });
// });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
