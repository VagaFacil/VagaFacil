var perfilModel = require("../models/perfilModel");


function testar(req, res) {
    console.log("ENTRAMOS NO avisoController");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}

function exibirPerfil(req, res) {
    var idFuncionario = req.params.idFuncionario;

    perfilModel.exibirPerfil(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirDadosPessoais(req, res) {
    var idFuncionario = req.params.idFuncionario;

    perfilModel.exibirDadosPessoais(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirDadosEmpresariais(req, res) {
    var idFuncionario = req.params.idFuncionario;

    perfilModel.exibirDadosEmpresariais(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function alterarNome(req, res) {
    var nomeNovo = req.body.nome;
    var idFuncionario = req.params.idFuncionario;

    perfilModel.alterarNome(nomeNovo, idFuncionario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function alterarImagem(req, res) {
    var foto = req.file.filename;
    var idFuncionario = req.params.idFuncionario;

    perfilModel.alterarImagem(foto, idFuncionario)
    .then(resultado => {
        // res.status(201).send("foto alterada com sucesso");
        res.json(resultado);
      }).catch(err => {
        res.status(500).send(err);
      });
}

module.exports = {
    testar,
    exibirPerfil,
    exibirDadosPessoais,
    exibirDadosEmpresariais,
    alterarNome,
    alterarImagem
}