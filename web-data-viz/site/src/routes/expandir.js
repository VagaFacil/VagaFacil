var express = require("express");
var router = express.Router();

var expandirController = require("../controllers/expandirController");

router.get("/", function (req, res) {
    expandirController.testar(req, res);
});

router.get("/listarBairro", function (req, res) {
    expandirController.listarBairro(req, res);
});

router.get("/listarRuas", function (req, res) {
    expandirController.listarRuas(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de expandirController.js
// router.post("/cadastrar", function (req, res) {
//     expandirController.cadastrar(req, res);
// })

// router.post("/autenticar", function (req, res) {
//     expandirController.entrar(req, res);
// });

module.exports = router;