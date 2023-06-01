var express = require("express");
var router = express.Router();

var acompanharController = require("../controllers/acompanharController");

router.get("/ultimas/:idRua", function (req, res) {
    acompanharController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idRua", function (req, res) {
    acompanharController.buscarMedidasEmTempoReal(req, res);
})

router.get('/tempo-medio/:idRua', function (req, res) {
    acompanharController.buscarTempoMedio(req, res);
});

router.get("/ocupacao/:idRua", function (req, res) {
    acompanharController.buscarOcupacao(req, res);
});

router.get("/historicoMensal/:idRua", function (req, res) {
    acompanharController.historicoMensal(req, res);
});

router.get("/historicoSemanal/:idRua", function (req, res) {
    acompanharController.historicoSemanal(req, res);
});

router.get("/historicoDiario/:idRua", function (req, res) {
    acompanharController.historicoDiario(req, res);
});

module.exports = router;