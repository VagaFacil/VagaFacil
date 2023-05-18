var express = require("express");
var router = express.Router();

var listaUsuarioController = require("../controllers/listaUsuarioController");

router.get("/", function (req, res) {
    listaUsuarioController.testar(req, res);
});

router.get("/exibirUsuarios", function (req, res) {
    listaUsuarioController.exibirUsuarios(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    listaUsuarioController.deletarUsuario(req, res);
});

module.exports = router;