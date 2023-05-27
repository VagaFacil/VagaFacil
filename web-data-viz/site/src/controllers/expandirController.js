var expandirModel = require("../models/expandirModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA expandirController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarBairro(req, res) {
    expandirModel.listarBairro()
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

function listarRuas(req, res) {
    var idBairro = req.params.idBairro;

    expandirModel.listarRuas(idBairro)
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

function historicoMensal(req, res) {
    var idRua = req.params.idRua;
    expandirModel.historicoMensal(idRua)
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
    expandirModel.historicoSemanal(idRua)
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
    expandirModel.historicoDiario(idRua)
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

function buscarUltimasMedidas(req, res) {
    var idRua = req.params.idRua;
    expandirModel.buscarUltimasMedidas(idRua).then(function (resultado) {
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

    expandirModel.buscarMedidasEmTempoReal(idRua).then(function (resultado) {
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

module.exports = {
    listarBairro,
    listarRuas,
    historicoMensal,
    historicoSemanal,
    historicoDiario,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    testar
}