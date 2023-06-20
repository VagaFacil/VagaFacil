var express = require("express");
var router = express.Router();

var listaUsuarioController = require("../controllers/listaUsuarioController");

router.get("/", function (req, res) {
    listaUsuarioController.testar(req, res);
});

router.get("/exibirUsuarios/:idFuncionario", function (req, res) {
    listaUsuarioController.exibirUsuarios(req, res);
});

router.get("/exibirInfos/:idFuncionario", function (req, res) {
    listaUsuarioController.exibirInfos(req, res);
});

router.delete("/deletarUsuario/:idFuncionario", function (req, res) {
    listaUsuarioController.deletarUsuario(req, res);
});

module.exports = router;