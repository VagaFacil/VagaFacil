var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A COFIGURAÇÃO DO UPLOAD
const perfilController = require("../controllers/perfilController");

router.get("/", function (req, res) {
    perfilController.testar(req, res);
});

router.get("/Perfil/:idFuncionario", function (req, res) {
    perfilController.exibirPerfil(req, res);
});

router.get("/exibirDadosPessoais/:idFuncionario", function (req, res) {
    perfilController.exibirDadosPessoais(req, res);
});

router.get("/exibirDadosEmpresariais/:idFuncionario", function (req, res) {
    perfilController.exibirDadosEmpresariais(req, res);
});

router.put("/alterarNome/:idFuncionario", function (req, res) {
    perfilController.alterarNome(req, res);
});

router.post("/alterarImagem/:idFuncionario", upload.single('imgNova'), (req, res) => {
    perfilController.alterarImagem(req, res);
});

module.exports = router;