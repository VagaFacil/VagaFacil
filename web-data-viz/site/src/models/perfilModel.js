var database = require("../database/config")

function exibirPerfil(idFuncionario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirPerfil()");
    var instrucao = `
    SELECT idFuncionario,
            nome,
            foto
            FROM funcionario WHERE idFuncionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirDadosPessoais(idFuncionario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n exibirDadosPessoais ()");
    var instrucao = `
    SELECT  nome, 
            Date(dataNascimento) dataNascimento, 
            cpf, 
            telefone, 
            email 
            FROM funcionario WHERE idFuncionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirDadosEmpresariais(idFuncionario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirDadosEmpresariais()");
    var instrucao = `
    SELECT  razao, 
            cep, 
            logradouro, 
            cnpj,
            cargo FROM empresa JOIN filial 
            JOIN endereco 
            JOIN funcionario 
            JOIN FilialFuncionario 
            ON idEmpresa = fkEmpresa 
            AND idEndereco = fkEndereco 
            AND idFuncionario = fkFuncionario 
            AND fkFilial= idFilial WHERE idFuncionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarNome(nomeNovo, idFuncionario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterarNome():", nomeNovo, idFuncionario);
    var instrucao = `
    UPDATE funcionario SET nome = '${nomeNovo}' WHERE idFuncionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarImagem(foto, idFuncionario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterarNome():", foto, idFuncionario);
    var instrucao = `
    UPDATE funcionario SET foto = '${foto}' WHERE idFuncionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    exibirPerfil,
    exibirDadosPessoais,
    exibirDadosEmpresariais,
    alterarNome,
    alterarImagem
};