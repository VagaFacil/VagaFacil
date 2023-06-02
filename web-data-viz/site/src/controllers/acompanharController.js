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

function buscarOcupacao(req,res) {
    var idRua = req.params.idRua;
    acompanharModel.buscarOcupacao(idRua).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a ocupação", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function historicoMensal(req, res) {
    var idRua = req.params.idRua;
    acompanharModel.historicoMensal(idRua)
        .then(function (resultado) {
            if (resultado.length > 0) {
                for (var i = 1; i <= 12; i++) {
                    if (resultado[i-1] == undefined || resultado[i-1].mes > i) {
                        resultado.splice(i-1, 0, {mes: i, valor: 0});
                    }
                }
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function historicoSemanal(req, res) {
    var idRua = req.params.idRua;
    acompanharModel.historicoSemanal(idRua)
        .then(function (resultado) {
            if (resultado.length > 0) {
                for (var i = 1; i <= 7; i++) {
                    if (resultado[i-1] == undefined || resultado[i-1].dia > i) {
                        resultado.splice(i-1, 0, {dia: i, valor: 0});
                    }
                }
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function historicoDiario(req, res) {
    var idRua = req.params.idRua;
    acompanharModel.historicoDiario(idRua)
        .then(function (resultado) {
            if (resultado.length > 0) {
                for (var i = 0; i <= 23; i++) {
                    if (resultado[i] == undefined || resultado[i].hora > i) {
                        resultado.splice(i, 0, {hora: i, valor: 0});
                    }
                }
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarAlertas(req, res) {
    var idFiliais = req.params.idFiliais;
    acompanharModel.buscarAlertas(idFiliais)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarTempoMedio,
    buscarOcupacao,
    historicoMensal,
    historicoSemanal,
    historicoDiario,
    buscarAlertas
}