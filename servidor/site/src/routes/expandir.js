var express = require("express");
var router = express.Router();

var expandirController = require("../controllers/expandirController");

router.get("/", function (req, res) {
    expandirController.testar(req, res);
});

router.get("/listarBairro", function (req, res) {
    expandirController.listarBairro(req, res);
});

router.get("/listarRuas/:idBairro", function (req, res) {
    expandirController.listarRuas(req, res);
});

router.get("/historicoMensal/:idRua", function (req, res) {
    expandirController.historicoMensal(req, res);
});

router.get("/historicoSemanal/:idRua", function (req, res) {
    expandirController.historicoSemanal(req, res);
});

router.get("/historicoDiario/:idRua", function (req, res) {
    expandirController.historicoDiario(req, res);
});

router.get('/tempo-medio/:idRua', function (req, res) {
    expandirController.buscarTempoMedio(req, res);
});

router.get("/ocupacao/:idRua", function (req, res) {
    expandirController.buscarOcupacao(req, res);
});

router.get("/ultimas/:idRua", function (req, res) {
    expandirController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idRua", function (req, res) {
    expandirController.buscarMedidasEmTempoReal(req, res);
});

router.post("/cadastrarFilial", function (req, res) {
    expandirController.cadastrar(req, res);
});

router.get("/buscarFiliais/:idFunc", function (req, res) {
    expandirController.buscarFiliais(req, res);
});

module.exports = router;