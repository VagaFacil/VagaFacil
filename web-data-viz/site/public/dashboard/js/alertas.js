
function listarAlertas() {
    fetch("/acompanhar/alertas/" + sessionStorage.FK_FILIAIS).then((response)=>{
        if (response.ok) {
            response.json().then(function (resposta) {
                var texto = '';
                for (let i = 0; i < resposta.length; i++) {
                    console.log(resposta[i])
                    if (resposta[i].ocupacao < 0.35) {
                        texto += `<div class="cardAlerta critico" onclick="obterDadosGraficos();mostrarDados(${resposta[i].idEndereco});">
                            Filial no endereço ${resposta[i].logradouro} ${resposta[i].numero} está com ocupação crítica!</div>`;
                    } else if (resposta[i].ocupacao < 0.60) {
                        texto += `<div class="cardAlerta alerta" onclick="obterDadosGraficos();mostrarDados(${resposta[i].idEndereco});">
                            Filial no endereço ${resposta[i].logradouro} ${resposta[i].numero} está com ocupação baixa.</div>`;
                    }
                }
                if (texto == '') {
                    divAlertas.style.display = 'none';
                } else {
                    divAlertas.style.display = 'flex';
                    divAlertas.innerHTML = texto;
                }
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }) 
    .catch((erro)=>{
        console.log(erro);
    });

    setTimeout(()=>{listarAlertas()}, 5000);
}