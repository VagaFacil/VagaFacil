var acompanharModel = require("../models/acompanharModel");

function buscarUltimasMedidas(req, res) {


    var idRua = req.params.idRua;


    acompanharModel.buscarUltimasMedidas(idRua).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idRua = req.params.idRua;

    console.log(`Recuperando medidas em tempo real`);

    acompanharModel.buscarMedidasEmTempoReal(idRua).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTempoMedio (req,res){
    var idRua = req.params.idRua;
    acompanharModel.buscarTempoMedio(idRua).then(function (resultado) {
        if (resultado.length > 0) {
            var contagem = 0;
            var divisoes = 0;
            for (var i  = 0; i < resultado.length; i++) {
                contagem += resultado[i].tempo.split('1').length - 1;
                divisoes += resultado[i].tempo.split(/1+/).length - 1;
            }
            res.status(200).json({tempoMedio: (contagem * 5 / divisoes)});
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a ocupação", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarTempoMedio
}