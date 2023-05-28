var express = require("express");
var router = express.Router();

var expandirController = require("../controllers/expandirController");

router.get("/", function (req, res) {
    expandirController.testar(req, res);
});

router.get("/listarBairro", function (req, res) {
    expandirController.listarBairro(req, res);
});

<<<<<<< HEAD
// router.get("/listarRuas/:idBairro", function (req, res) {
router.get("/listarRuas", function (req, res) {
=======
router.get("/listarRuas/:idBairro", function (req, res) {
>>>>>>> b4f8300e559e265f1d7c190f9b49614a43e742b4
    expandirController.listarRuas(req, res);
});

router.get("/historicoMensal/:idRua", function (req, res) {
    expandirController.historicoMensal(req, res);
});

<<<<<<< HEAD
// router.post("/autenticar", function (req, res) {
//     expandirController.entrar(req, res);
// });
=======
router.get("/historicoSemanal/:idRua", function (req, res) {
    expandirController.historicoSemanal(req, res);
});

router.get("/historicoDiario/:idRua", function (req, res) {
    expandirController.historicoDiario(req, res);
});

router.get("/ocupacao/:idRua", function (req, res) {
    expandirController.buscarOcupacao(req, res);
});

router.get("/ultimas/:idRua", function (req, res) {
    expandirController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idRua", function (req, res) {
    expandirController.buscarMedidasEmTempoReal(req, res);
})
>>>>>>> b4f8300e559e265f1d7c190f9b49614a43e742b4

module.exports = router;