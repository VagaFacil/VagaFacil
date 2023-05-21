var express = require("express");
var router = express.Router();

var acompanharController = require("../controllers/acompanharController");

router.get("/ultimas/:idDados", function (req, res) {
    acompanharController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idDados", function (req, res) {
    acompanharController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;