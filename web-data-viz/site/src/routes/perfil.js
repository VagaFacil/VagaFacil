var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/", function (req, res) {
    perfilController.testar(req, res);
});

router.get("/exibirPerfil/:idFuncionario", function (req, res) {
    perfilController.exibirPerfil(req, res);
});

router.get("/exibirDadosPessoais/:idFuncionario", function (req, res) {
    perfilController.exibirDadosPessoais(req, res);
});

router.get("/exibirDadosEmpresariais/:idFuncionario", function (req, res) {
    perfilController.exibirDadosEmpresariais(req, res);
});

router.get("/alterarNome/idFuncionario", function (req, res) {
    perfilController.alterarNome(req, res);
});

module.exports = router;