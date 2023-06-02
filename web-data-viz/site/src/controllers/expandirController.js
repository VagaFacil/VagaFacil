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

function buscarTempoMedio(req, res) {
    var idRua = req.params.idRua;
    expandirModel.buscarTempoMedio(idRua).then(function (resultado) {
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

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // Dados Funcionario
    var idFunc = req.body.idFuncServer;
    var nome = req.body.nomeServer;
    var cargo = req.body.cargoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var cpf = req.body.cpfServer;
    var dataNascimento = req.body.dataNascimentoServer;
    // Dados Empresa
    var cnpj = req.body.cnpjServer;
    // Dados bairro
    var nomeBairro = req.body.nomeBairroServer;
    //Dados bairro
    var logradouro = req.body.enderecoServer;
    var cep = req.body.cepServer; // falta configurar
    //Dados Filial
    var numero = req.body.numeroServer; // falta configurar
    var complemento = req.body.complementoServer;




    console.log(`${idFunc} ${nome} ${cargo} ${email} ${senha} ${telefone} ${cpf} ${dataNascimento} - 
                 ${cnpj} - 
                 ${cep} ${logradouro} ${numero} ${complemento} ${nomeBairro}`);

    // Faça as validações dos valores
    if (idFunc == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (nome == undefined) {
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
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Sua razao está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (nomeBairro == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    }

    else {
        // Passe os valores como parâmetro e vá para o arquivo funcionarioModel.js
        expandirModel.cadastrarFilial(idFunc, nome, cargo, email, senha, telefone, cpf, dataNascimento, cnpj, cep, logradouro, numero, complemento, nomeBairro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarFiliais(req, res) {
    
    var idFunc = req.params.idFunc;

    expandirModel.buscarFiliais(idFunc).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as Filiais.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarBairro,
    listarRuas,
    historicoMensal,
    historicoSemanal,
    historicoDiario,
    buscarTempoMedio,
    buscarOcupacao,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    cadastrar,
    buscarFiliais,
    testar
}