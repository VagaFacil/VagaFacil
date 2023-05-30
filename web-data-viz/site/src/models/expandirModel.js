var database = require("../database/config")

function listarBairro() {
    console.log("ACESSEI O expandir MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
            select b.idBairro, b.nome AS 'bairro', b.regiao AS 'zona', bp.fluxo, 
                bi.adolescente, bi.jovemAdulto, bi.adulto, bi.idoso, 
                br.baixa, br.media, br.alta
                from bairro AS b 
                join bairroRenda AS br 
                join bairroIdade AS bi 
                join bairroPopulacao AS bp 
                on b.idBairro = br.idBairro and b.idBairro = bi.idBairro and b.idBairro = bp.idBairro
                WHERE EXISTS (SELECT idEndereco FROM endereco e WHERE b.idBairro = e.fkBairro);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarRuas(idBairro) {
    console.log("ACESSEI O expandir MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarRuas()", idBairro);
    var instrucao = `
            select e.idEndereco, e.logradouro, e.cep, b.nome FROM endereco e JOIN bairro b ON b.idBairro = e.fkBairro
                WHERE b.idBairro = ${idBairro} AND EXISTS (SELECT idSensor FROM sensor s WHERE e.idEndereco = s.fkEndereco);
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
        WHERE dataHora > CURDATE() AND fkEndereco = ${idRua} GROUP BY hora ORDER BY hora DESC LIMIT 24`

    return database.executar(instrucao);
}

function buscarMedidasEmTempoReal(idRua) {
    var instrucao = `SELECT DATE_FORMAT(dataHora, '%H:%i') as hora, SUM(valor) AS valor
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor
        WHERE dataHora > CURDATE() AND fkEndereco = ${idRua} GROUP BY hora ORDER BY hora DESC LIMIT 1`

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
    buscarMedidasEmTempoReal
};