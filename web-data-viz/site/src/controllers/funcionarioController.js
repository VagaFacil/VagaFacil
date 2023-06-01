var funcionarioModel = require("../models/funcionarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA funcionarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarEmpresa(req, res) {
    var idFilial = req.params.idFilial;

    funcionarioModel.listarEmpresa(idFilial)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function listar(req, res) {
    funcionarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        funcionarioModel.entrar(email, senha)
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
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // Dados Funcionario
    var idFuncionario = 100000;
    var nome = req.body.nomeServer;
    var cargo = req.body.cargoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var cpf = req.body.cpfServer;
    var dataNascimento = req.body.dataNascimentoServer;
    var foto = 'usuarioPadrao.png';
    // Dados Empresa
    var idEmpresa = 1;
    var razao = req.body.razaoServer; 
    var cnpj = req.body.cnpjServer; 
    // Dados bairro
    var idBairro = 1;
    var nomeBairro = req.body.nomeBairroServer; 
    //Dados bairro
    var idEndereco = 150000;
    var logradouro = req.body.enderecoServer;  
    var cep = req.body.cepServer; // falta configurar
    var fkBairro = idBairro;
    //Dados Filial
    var idFilial = 50000;
    var numero = req.body.numeroServer; // falta configurar
    var complemento = req.body.complementoServer;



   
    console.log(`${nome} ${cargo} ${email} ${senha} ${telefone} ${cpf} ${dataNascimento}`);

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
    } 
    // else if (fkSuperior === undefined) {
    //     res.status(400).send("Seu superior está undefined!");
    // } 
    else {
        // Passe os valores como parâmetro e vá para o arquivo funcionarioModel.js
        funcionarioModel.cadastrarFuncionario(idFuncionario, nome, cargo, email, senha, telefone, cpf, dataNascimento)
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


module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    listarEmpresa
}