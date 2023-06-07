var database = require("../database/config")

function listarBairro() {
    console.log("ACESSEI O expandir MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
            select b.idBairro, b.nome AS 'bairro', b.regiao AS 'zona', bp.fluxo, 
                bi.adolescente, bi.jovemAdulto, bi.adulto, bi.idoso, 
                br.baixa, br.media, br.alta,
                SUM(d.valor) / COUNT(d.valor) AS ocupacao
                FROM bairro AS b 
                JOIN bairroRenda AS br 
                JOIN bairroIdade AS bi 
                JOIN bairroPopulacao AS bp 
                ON b.idBairro = br.idBairro AND b.idBairro = bi.idBairro AND b.idBairro = bp.idBairro
                JOIN endereco e ON b.idBairro = e.fkBairro
                JOIN sensor s ON e.idEndereco = s.fkEndereco
                JOIN dados d ON s.idSensor = d.fkSensor
                GROUP BY b.idBairro ORDER BY ocupacao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarRuas(idBairro) {
    console.log("ACESSEI O expandir MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarRuas()", idBairro);
    var instrucao = `
            select e.idEndereco, e.logradouro, e.cep, b.nome,
                SUM(d.valor) / COUNT(d.valor) AS ocupacao
                FROM endereco e JOIN bairro b ON b.idBairro = e.fkBairro
                JOIN sensor s ON e.idEndereco = s.fkEndereco
                JOIN dados d ON s.idSensor = d.fkSensor
                WHERE b.idBairro = ${idBairro}
                GROUP BY e.idEndereco ORDER BY ocupacao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function historicoMensal(idRua) {
    var instrucao = `SELECT MONTH(dataHora) AS mes, SUM(valor) AS valor 
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor 
        WHERE fkEndereco = ${idRua} GROUP BY mes ORDER BY mes;
    `;
    return database.executar(instrucao);
}

function historicoSemanal(idRua) {
    var instrucao = `SELECT DAYOFWEEK(dataHora) AS dia, SUM(valor) AS valor 
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor 
        WHERE fkEndereco = ${idRua} GROUP BY dia ORDER BY dia;
    `;
    return database.executar(instrucao);
}

function historicoDiario(idRua) {
    var instrucao = `SELECT HOUR(dataHora) AS hora, SUM(valor) AS valor
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor 
        WHERE fkEndereco = ${idRua} GROUP BY hora ORDER BY hora;
    `;
    return database.executar(instrucao);
}

function buscarTempoMedio(idRua) {
    var instrucao = `SELECT idSensor, REPLACE(GROUP_CONCAT(valor), ',', '') as tempo
	FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor
        WHERE fkEndereco = ${idRua} GROUP BY idSensor ORDER BY idSensor; `;
    return database.executar(instrucao);
}

function buscarOcupacao(idRua) {
    var instrucao = `SELECT SUM(valor) / COUNT(valor) AS ocupacao FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor WHERE fkEndereco = ${idRua}`;
    return database.executar(instrucao);
}

function buscarUltimasMedidas(idRua) {
    var instrucao = `SELECT DATE_FORMAT(dataHora, '%H:%i') as hora, SUM(valor) AS valor
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor
        WHERE dataHora > CURDATE() AND dataHora <= NOW() AND fkEndereco = ${idRua} GROUP BY hora ORDER BY hora DESC LIMIT 24`

    return database.executar(instrucao);
}

function buscarMedidasEmTempoReal(idRua) {
    var instrucao = `SELECT DATE_FORMAT(dataHora, '%H:%i') as hora, SUM(valor) AS valor
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor
        WHERE dataHora > CURDATE() AND dataHora <= NOW() AND fkEndereco = ${idRua} GROUP BY hora ORDER BY hora DESC LIMIT 1`

    return database.executar(instrucao);
}

function cadastrarFilial(idFunc, nome, cargo, email, senha, telefone, cpf, dataNascimento,cnpj,cep,logradouro,numero,complemento,nomeBairro) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cargo, email, senha, telefone, cpf, dataNascimento);
    var instrucao = `
        CALL cadastrar_filial(${idFunc}, '${nome}','${cargo}','${email}', '${senha}', '${telefone}','${cpf}', '${dataNascimento}', 'usuarioPadrao.png',
            '${cnpj}',
            '${cep}', '${logradouro}', '${numero}', '${complemento}', '${nomeBairro}'
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarFiliais(idFunc) {
    var instrucao = `
        SELECT GROUP_CONCAT(fkFilial) as filiais FROM filialFuncionario WHERE fkFuncionario = ${idFunc};
    `;
    return database.executar(instrucao);
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
    cadastrarFilial,
    buscarFiliais
};