var database = require("../database/config")

function listarBairro() {
<<<<<<< HEAD
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select b.nome AS 'bairro',
    b.regiao AS 'zona',
    bp.fluxo, bi.adolescente, bi.jovemAdulto, bi.adulto,bi.idoso,br.baixa, br.media, br.alta from bairro AS b 
    join bairroRenda AS br
    join bairroIdade AS bi
    join bairroPopulacao AS bp
    on b.idBairro = br.idBairro 
    and b.idBairro = bi.idBairro 
    and b.idBairro = bp.idBairro;
=======
    console.log("ACESSEI O expandir MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
            select b.idBairro, b.nome AS 'bairro', b.regiao AS 'zona', bp.fluxo, bi.adolescente, bi.jovemAdulto, 
                bi.adulto, bi.idoso, br.baixa, br.media, br.alta
                from bairro AS b join bairroRenda AS br join bairroIdade AS bi 
                join bairroPopulacao AS bp on b.idBairro = br.idBairro 
                and b.idBairro = bi.idBairro and b.idBairro = bp.idBairro
                WHERE EXISTS (SELECT idEndereco FROM endereco e WHERE b.idBairro = e.fkBairro);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarRuas(idBairro) {
    console.log("ACESSEI O expandir MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarRuas()", idBairro);
    var instrucao = `
            select e.idEndereco, e.logradouro FROM endereco e JOIN bairro b ON b.idBairro = e.fkBairro
                WHERE b.idBairro = ${idBairro} AND EXISTS (SELECT idSensor FROM sensor s WHERE e.idEndereco = s.fkEndereco);
>>>>>>> 4a8eb8619165e0ba7ab7a2a89c711b367691bb58
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM funcionario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO funcionario (nome, cargo, email, senha, telefone, cpf, dataNascimento, fkSuperior) 
        VALUES ('${nome}', '${cargo}','${email}', '${senha}', '${telefone}','${cpf}', '${dataNascimento}', ${fkSuperior});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarBairro,
<<<<<<< HEAD
=======
    listarRuas
>>>>>>> 4a8eb8619165e0ba7ab7a2a89c711b367691bb58
};