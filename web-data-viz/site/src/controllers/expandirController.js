var expandirModel = require("../models/expandirModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA expandirController");
=======
    console.log("ENTRAMOS NA funcionarioController");
>>>>>>> 4a8eb8619165e0ba7ab7a2a89c711b367691bb58
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

>>>>>>> 4a8eb8619165e0ba7ab7a2a89c711b367691bb58
function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        expandirModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
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

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var cargo = req.body.cargoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var cpf = req.body.cpfServer;
    var dataNascimento = req.body.dataNascimentoServer;
    var fkSuperior = req.body.fkSuperiorServer;

    console.log(`${nome} ${cargo} ${email} ${senha} ${telefone} ${cpf} ${dataNascimento} ${fkSuperior}`);

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cargo == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else if (dataNascimento == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!");
    } else if (fkSuperior === undefined) {
        res.status(400).send("Seu superior está undefined!");
<<<<<<< HEAD
    }
=======
    } 
>>>>>>> 4a8eb8619165e0ba7ab7a2a89c711b367691bb58
    else {
        // Passe os valores como parâmetro e vá para o arquivo expandirModel.js
        expandirModel.cadastrar(nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior)
            .then(
                function (resultado) {
                    res.json(resultado);
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

function buscarOcupacao(req, res) {
    var idRua = req.params.idRua;
    expandirModel.buscarOcupacao(idRua).then(function (resultado) {
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
<<<<<<< HEAD
=======
    listarRuas,
>>>>>>> 4a8eb8619165e0ba7ab7a2a89c711b367691bb58
    testar
}