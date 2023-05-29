var express = require("express");
var router = express.Router();

var acompanharController = require("../controllers/acompanharController");

router.get("/ultimas/:idRua", function (req, res) {
    acompanharController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idRua", function (req, res) {
    acompanharController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;