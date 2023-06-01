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
function cadastrarFuncionario(idFuncionario, nome, cargo, email, senha, telefone, cpf, dataNascimento, foto) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO funcionario (idFuncionario, nome, cargo, email, senha, telefone, cpf, dataNascimento, foto) 
        VALUES ('${idFuncionario}','${nome}','${cargo}','${email}', '${senha}', '${telefone}','${cpf}', '${dataNascimento}', '${foto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarEmpresa(idEmpresa, razao, cnpj) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO empresa (razao, cnpj) 
        VALUES ('${idEmpresa}','${razao}','${cnpj}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarBairro(idBairro, nomeBairro) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO bairro (idBairro, nome) 
        VALUES ('${idBairro}', '${nomeBairro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarEndereco(idEndereco,logradouro, cep, fkBairro) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO endereco (idEndereco,logradouro, cep, fkBairro) 
        VALUES ('${idEndereco}', '${logradouro}', '${cep}', '${fkBairro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrarFilial(idFilial,numero, complemento, fkEmpresa, fkEndereco) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO filial (idFilial,numero, complemento) 
        VALUES ('${idFilial}','${numero}', '${complemento}', '${fkEmpresa}', '${fkEndereco}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarFilialFuncionario(idFilial,numero, complemento, fkEmpresa, fkEndereco) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO filialFuncionario (fkFuncionario, fkFilial) 
        VALUES ('${fkFuncionario}','${fkFilial}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}





module.exports = {
    entrar,
    listarEmpresa,
    cadastrarFuncionario,
    cadastrarEmpresa,
    cadastrarFilial,
    cadastrarEndereco,
    cadastrarBairro
    // listar,
};