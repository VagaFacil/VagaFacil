var database = require("../database/config");

function buscarUltimasMedidas(idRua, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT DATE_FORMAT(dataHora, '%H:%i') as hora, SUM(valor)/COUNT(valor)*100 AS valor
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor
        WHERE dataHora >= CURDATE() AND dataHora <= NOW() AND fkEndereco = ${idRua} GROUP BY hora ORDER BY hora DESC LIMIT 24`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idRua) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT DATE_FORMAT(dataHora, '%H:%i') as hora, SUM(valor)/COUNT(valor)*100 AS valor
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor
        WHERE dataHora >= CURDATE() AND dataHora <= NOW() AND fkEndereco = ${idRua} GROUP BY hora ORDER BY hora DESC LIMIT 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempoMedio(idRua){
    var instrucao = `SELECT idSensor, REPLACE(GROUP_CONCAT(valor), ',', '') as tempo
	FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor
        WHERE fkEndereco = ${idRua} GROUP BY idSensor ORDER BY idSensor; `;
    return database.executar(instrucao);
}
function historicoMensal(idRua) {
    var instrucao = `SELECT MONTH(dataHora) AS mes, SUM(valor)/COUNT(valor)*100 AS valor 
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor 
        WHERE fkEndereco = ${idRua} GROUP BY mes ORDER BY mes;
    `;
    return database.executar(instrucao);
}
function buscarOcupacao(idRua){
    var instrucao = `SELECT SUM(valor) / COUNT(valor) AS ocupacao FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor WHERE fkEndereco = ${idRua}`;
    return database.executar(instrucao);
}
function historicoSemanal(idRua) {
    var instrucao = `SELECT DAYOFWEEK(dataHora) AS dia, SUM(valor)/COUNT(valor)*100 AS valor 
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor 
        WHERE fkEndereco = ${idRua} GROUP BY dia ORDER BY dia;
    `;
    return database.executar(instrucao);
}
function historicoDiario(idRua) {
    var instrucao = `SELECT HOUR(dataHora) AS hora, SUM(valor)/COUNT(valor)*100 AS valor
        FROM sensor s JOIN dados d ON s.idSensor = d.fkSensor 
        WHERE fkEndereco = ${idRua} GROUP BY hora ORDER BY hora;
    `;
    return database.executar(instrucao);
}

function buscarAlertas(idFiliais) {
    var instrucao = `
        SELECT e.idEndereco,f.bairro, f.logradouro, f.numero, SUM(d.valor) / count(d.valor) AS ocupacao
        FROM dados d JOIN sensor s ON d.fkSensor = s.idSensor
        JOIN endereco e ON e.idEndereco = s.fkEndereco
        JOIN filial f ON f.cep = e.cep WHERE f.idFilial IN (${idFiliais}) GROUP BY e.idEndereco, f.logradouro, f.numero,f.bairro;
        `;
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarTempoMedio,
    buscarOcupacao,
    historicoMensal,
    historicoSemanal,
    historicoDiario,
    buscarAlertas
}
