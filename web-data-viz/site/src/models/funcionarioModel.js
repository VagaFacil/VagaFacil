var database = require("../database/config")

// function listar() {
//     console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
//     var instrucao = `
//         SELECT * FROM funcionario;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function listarEmpresa(idFilial) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarEmpresa(): ", idFilial)
    var instrucao = `
        SELECT e.razao, e.cnpj FROM empresa e INNER JOIN filial f ON f.fkEmpresa = e.idEmpresa WHERE f.idFilial = ${idFilial};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT f.*, GROUP_CONCAT(ff.fkFilial) AS filiais FROM funcionario f JOIN filialFuncionario ff ON f.idFuncionario = ff.fkFuncionario WHERE f.email = '${email}' AND f.senha = '${senha}' GROUP BY f.idFuncionario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarFuncionario(nome, cargo, email, senha, telefone, cpf, dataNascimento,razao,cnpj,cep,logradouro,numero,complemento,nomeBairro) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento,razao,cnpj,cep,logradouro,numero,complemento,nomeBairro);
    var instrucao = `
        CALL cadastrar_funcionario('${nome}','${cargo}','${email}', '${senha}', '${telefone}','${cpf}', '${dataNascimento}', 'usuarioPadrao.png',
            '${razao}','${cnpj}',
            '${cep}', '${logradouro}', '${numero}', '${complemento}', '${nomeBairro}'
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserirFk(cnpj,cep,numero,complemento) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirFk():");
    var instrucao = `
    UPDATE filial SET fkEmpresa = (SELECT idEmpresa FROM empresa WHERE cnpj = '${cnpj}') WHERE cep = '${cep}' AND numero = '${numero}' AND complemento = '${complemento}';;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    listarEmpresa,
    cadastrarFuncionario,
    inserirFk
};



// function cadastrarEmpresa( razao, cnpj) {
//     console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//         INSERT INTO empresa (razao, cnpj) 
//         VALUES ('${razao}','${cnpj}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }


// function cadastrarBairro(nomeBairro) {
//     console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//         INSERT INTO bairro (nome) 
//         VALUES ('${nomeBairro}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }


// function cadastrarEndereco(logradouro, cep) {
//     console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//         INSERT INTO endereco (cep, fkBairro) 
//         VALUES ('${logradouro}', '${cep}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }



// function cadastrarFilial(numero, complemento) {
//     console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//         INSERT INTO filial (numero, complemento) 
//         VALUES ('${numero}', '${complemento}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }
