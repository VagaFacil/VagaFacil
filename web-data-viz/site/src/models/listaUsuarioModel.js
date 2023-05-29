var database = require("../database/config");

function exibirUsuarios(idFuncionario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirUsuarios()");
    var instrucao = `
    SELECT sup.idFuncionario AS superior,
        func.idFuncionario AS funcionario,
        func.nome,
        func.foto
            FROM funcionario AS sup JOIN funcionario AS func 
                ON func.fkSuperior = sup.idFuncionario
                    WHERE sup.idFuncionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirInfos(idFuncionario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirInfos()");
    var instrucao = `
    SELECT idFuncionario AS funcionario,
        nome AS nome,
        dataNascimento AS nascimento,
        cpf AS cpf,
        telefone AS telefone,
        email AS email
            FROM funcionario
                    WHERE idFuncionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarUsuario(idFuncionario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirInfos()");
    var instrucao = `
    DELETE FROM funcionario WHERE idFuncionario = ${idFuncionario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    exibirUsuarios,
    exibirInfos,
    deletarUsuario
}
