
    /* b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
    b_cpf.innerHTML = sessionStorage.CPF_USUARIO; */

    let proximaAtualizacao;

    window.onload = obterDadosGraficos();

    function obterDadosGraficos() {
        obterDadosGrafico(150000)
    }

    // verificar_autenticacao();

    /*  function alterarTitulo(idRua) {
         var tituloAquario = document.getElementById(`tituloAquario${idRua}`)
         tituloAquario.innerHTML = "Últimas medidas de Temperatura e Umidade do <span style='color: #e6005a'>Aquário " + idRua + "</span>"
     } */

    function exibirAquario(idRua) {
        banner2.style.display = "block"
    }
    var contextoChave = document.getElementById('canvLine').getContext('2d');
    // contextoChave.canvas.width = 300;
    // contextoChave.canvas.height = 100;
    var chartLinha = new Chart(
        contextoChave,
        {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Chave',
                    type: 'line',
                    borderColor: '#F49C24',
                    backgroundColor: '#F49C24',
                }],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Ocupação Recente',
                        color: '#F49C24',
                        font: {
                            size: 20
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#F49C24',
                        }
                    },
                    x: {
                        ticks: {
                            color: '#F49C24',
                        }
                    }
                },
                }
            }
        
    );

    // O gráfico é construído com três funções:
    // 1. obterDadosGrafico -> Traz dados do Banco de Dados para montar o gráfico da primeira vez
    // 2. plotarGrafico -> Monta o gráfico com os dados trazidos e exibe em tela
    // 3. atualizarGrafico -> Atualiza o gráfico, trazendo novamente dados do Banco

    // Esta função *obterDadosGrafico* busca os últimos dados inseridos em tabela de medidas.
    // para, quando carregar o gráfico da primeira vez, já trazer com vários dados.
    // A função *obterDadosGrafico* também invoca a função *plotarGrafico*

    //     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
    //     Para ajustar o "select", ajuste o comando sql em src/models
    function obterDadosGrafico(idRua) {

        // alterarTitulo(idRua)

        if (proximaAtualizacao != undefined) {
            clearTimeout(proximaAtualizacao);
        }

        fetch(`/acompanhar/ultimas/${idRua}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    plotarGrafico(resposta, idRua);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

    // Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
    // Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
    // A função *plotarGrafico* também invoca a função *atualizarGrafico*


    function plotarGrafico(resposta, idRua) {

        console.log('iniciando plotagem do gráfico...');

        // Criando estrutura para plotar gráfico - labels
        let labels = [ ];

        // Criando estrutura para plotar gráfico - dados
        let dados = {
            labels: labels,
            datasets: [
            {
                label: 'hora',
                data: [],
                fill: false,
                borderColor: '#F49C24',
                tension: 0.1
            }]
        };
      
        console.log('----------------------------------------------')
        console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
        console.log(resposta)

        // Inserindo valores recebidos em estrutura para plotar o gráfico
        for (i = 0; i < resposta.length; i++) {
            var registro = resposta[i];
            labels.push(registro.hora);
            dados.datasets[0].data.push(registro.valor);
        }

        console.log('----------------------------------------------')
        console.log('O gráfico será plotado com os respectivos valores:')
        console.log('Labels:')
        console.log(labels)
        console.log('Dados:')
        console.log(dados.datasets)
        console.log('----------------------------------------------')

        // Criando estrutura para plotar gráfico - config
        // const config = {
        //     type: 'line',
        //     options: {
        //         plugins: {
        //             title: {
        //                 display: true,
        //                 text: 'Ocupação total da rua',
        //                 color: '#F49C24',
        //                 font:{
        //                     size: 20
        //                 }
        //             },
        //             legend:{
        //                 display: false
        //             }
        //         }
        //     },
        //     data: dados,
        // };

        // Adicionando gráfico criado em div na tela
        // let chartLinha = new Chart(
        //     document.getElementById(`chartLinhaCanvas${idRua}`),
        //     config
        // );
        chartLinha.data = dados;
        chartLinha.options.plugins.title.text = 'Ocupação Recente';
        chartLinha.update();

        setTimeout(() => atualizarGrafico(idRua, dados/* , chartLinha */), 2000);
    }


    // Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
    // buscando a última medida inserida em tabela contendo as capturas, 

    //     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
    //     Para ajustar o "select", ajuste o comando sql em src/models
    function atualizarGrafico(idRua, dados/* , chartLinha */) {



        fetch(`/acompanhar/tempo-real/${idRua}`, { cache: 'no-store' }).then(function (response) {
            console.log(response)
            if (response.ok) {
                response.json().then(function (novoRegistro) {

                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                    console.log(`Dados atuais do gráfico:`);
                    console.log(dados);

                    // let avisoCaptura = document.getElementById(`avisoCaptura${idRua}`)
                    // avisoCaptura.innerHTML = ""
                     var hora = new Date(novoRegistro[0].hora);

                    if (novoRegistro[0].hora == dados.labels[dados.labels.length - 1]) {
                        console.log("---------------------------------------------------------------")
                        console.log("Como não há dados novos para captura, o gráfico não atualizará.")
                        // avisoCaptura.innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há dados novos a exibir, o gráfico não atualizará."
                        console.log("Horário do novo dado capturado:")
                        console.log(novoRegistro[0].hora)
                        console.log("Horário do último dado capturado:")
                        console.log(dados.labels[dados.labels.length - 1])
                        console.log("---------------------------------------------------------------")
                    } else {
                        // tirando e colocando valores no gráfico
                        dados.labels.shift(); // apagar o primeiro
                        dados.labels.push(novoRegistro[0].hora); // incluir um novo momento

                       /*  dados.datasets[0].data.shift();  // apagar o primeiro de umidade
                        dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade
 */
                        dados.datasets[0].data.shift();  // apagar o primeiro de temperatura
                        
                        dados.datasets[0].data.push(novoRegistro[0].valor); // incluir uma nova medida de temperatura

                        chartLinha.update();
                    }

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGrafico(idRua, dados/* , chartLinha */), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGrafico(idRua, dados/* , chartLinha */), 2000);
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });

    }






































/* 
 */
// 
// 
// 
// 
// 
// 
// 

// 
// 
// 
// 
// 
// 
// 
// 

// 

var dadosLinha = 0;
var dadosPizza = 0;
var dadosOcupacao = 0;




function changeDisabled(elemento) {
    var disabled = document.getElementById(elemento).disabled
    document.getElementById(elemento).disabled = !disabled;
}

// const chartLine = document.getElementById('canvLine');
// /*Começo do gráfico de linha*/
// var graficoLinha = new Chart(chartLine, {
//     type: 'line',
//     data: {
//         datasets: [{
//             data: dadosLinha,
//         }],
//         labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
//     },
//     options: {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Oua',
//                 color: '#F49C24',
//                 font: {
//                     size: 20
//                 }
//             },
//             legend: {
//                 display: false
//             }
//         },
//         scales: {
        //     y: {
        //         beginAtZero: true,
        //         ticks: {
        //             color: '#F49C24',
        //         }
        //     },
        //     x: {
        //         ticks: {
        //             color: '#F49C24',
        //         }
        //     }
        // },
//         backgroundColor: '#F49C24',
//         borderColor: '#F49C24',
//     }
// });
/*Final do grafico de linha*/

/*Começo dos gráficos de pizza*/
//gráfico do tempo médio de permanência
const chartGauge1 = document.getElementById('canvGauge1');
var graficoPizza = new Chart(chartGauge1, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [15, 105],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Tempo médio de permanência',
                color: '#F49C24',
                font: {
                    size: 20
                }
            },
            subtitle: {
                display: true,
                text: '15 mins',
                color: '#F49C24',
                padding: 0,
                font: {
                    size: 16
                }
            },
        },
        backgroundColor: ['#F49C24', '#0C243C'],
        borderColor: '#FCF4EC',
        circumference: 180,
        rotation: -90,
        cutout: '70%'
    }
});
//Gráfico de ocupação média
const chartGauge2 = document.getElementById('canvGauge2');
var graficoOcupacao = new Chart(chartGauge2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [55, 45],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Ocupação média',
                color: '#F49C24',
                font: {
                    size: 20
                }
            },
            subtitle: {
                display: true,
                text: '55%',
                color: '#F49C24',
                padding: 0,
                font: {
                    size: 16
                }
            },
        },
        backgroundColor: ['#F49C24', '#0C243C'],
        borderColor: '#FCF4EC',
        circumference: 180,
        rotation: -90,
        cutout: '70%'
    }
});
/*Final dos gráficos de pizza*/
/*Começo da function para a definição dos gráficos e endereços*/
function prosseguir() {
    //Começo das definições dos mapas
    if (endereco.value == "1") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9019071539688!2d-46.65943422488846!3d-23.5719662619815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c3cfa9089f%3A0xdca3913816cf37b5!2sAlameda%20Joaquim%20Eug%C3%AAnio%20de%20Lima%2C%201394%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001403-002!5e0!3m2!1spt-BR!2sbr!4v1681769540665!5m2!1spt-BR!2sbr"
    }
    if (endereco.value == "2") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1136022336655!2d-46.6545616!3d-23.5643631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c89ea88f9b%3A0xb86d5ff906f8e985!2sR.%20Pamplona%2C%20726%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001405-001!5e0!3m2!1spt-BR!2sbr!4v1681768808510!5m2!1spt-BR!2sbr"
    }
    if (endereco.value == "3") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3617408355562!2d-46.655421399999994!3d-23.5554481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5834ade6f4b7%3A0xaeeec5b034391338!2sRua%20Peixoto%20Gomide%2C%20167%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001409-001!5e0!3m2!1spt-BR!2sbr!4v1681768848352!5m2!1spt-BR!2sbr"
    } if (endereco.value == "4") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9421146623654!2d-46.649790724888405!3d-23.570522361928436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59be13392ed1%3A0x9e8cb768e7697fab!2sAlameda%20Santos%2C%20211%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001419-000!5e0!3m2!1spt-BR!2sbr!4v1681768881392!5m2!1spt-BR!2sbr"
    } if (endereco.value == "5") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2862325309984!2d-46.66411292488888!3d-23.558161261474204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2a5270055%3A0x3c7ea4f4c7d51fb6!2sRua%20Haddock%20Lobo%2C%20595%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001414-001!5e0!3m2!1spt-BR!2sbr!4v1681768969436!5m2!1spt-BR!2sbr"
    } if (endereco.value == "6") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1148560446027!2d-46.66680352488864!3d-23.564318061700366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d16cc69cd3%3A0x941940dcb39dc8ff!2sR.%20Padre%20Jo%C3%A3o%20Manuel%2C%20755%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001411-001!5e0!3m2!1spt-BR!2sbr!4v1681769011142!5m2!1spt-BR!2sbr"
    } if (endereco.value == "7") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.158548978614!2d-46.65697147488875!3d-23.562748511642713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8e70065e9%3A0x3212f92921c32582!2sAv.%20Paulista%2C%201374!5e0!3m2!1spt-BR!2sbr!4v1681769114620!5m2!1spt-BR!2sbr"
    } if (endereco.value == "8") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2406062191353!2d-46.65377912488891!3d-23.559800561534328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b61fd60a2d%3A0x2f8805a6ec9c2efb!2sR.%20Pamplona%2C%20145%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001405-900!5e0!3m2!1spt-BR!2sbr!4v1681769147944!5m2!1spt-BR!2sbr"
    } if (endereco.value == "9") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1479026368634!2d-46.653655824888816!3d-23.56313096165682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c803707407%3A0x5ef79c6b9443e695!2sR.%20S%C3%A3o%20Carlos%20do%20Pinhal%2C%20424%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001333-000!5e0!3m2!1spt-BR!2sbr!4v1681769181784!5m2!1spt-BR!2sbr"
    } if (endereco.value == "10") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.32261898998!2d-46.66545392488899!3d-23.556853861426234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582d18a446a9%3A0x9e68c733c12c181a!2sR.%20Bela%20Cintra%2C%201200%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001415-002!5e0!3m2!1spt-BR!2sbr!4v1681769211545!5m2!1spt-BR!2sbr"
    } if (endereco.value == "11") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.40729348837!2d-46.655571224889!3d-23.553811161314492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58353a5e19c1%3A0x7fa27cf3e79276d3!2sR.%20Frei%20Caneca%2C%20569%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001307-001!5e0!3m2!1spt-BR!2sbr!4v1681769239243!5m2!1spt-BR!2sbr"
    } if (endereco.value == "12") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4966042066894!2d-46.65012422488917!3d-23.550601461196607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584b744569f7%3A0xbabff32a51f68e77!2sR.%20Augusta%2C%20129%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001305-000!5e0!3m2!1spt-BR!2sbr!4v1681769264882!5m2!1spt-BR!2sbr"
    } if (endereco.value == "13") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.056676197387!2d-46.671987424888684!3d-23.566407861777236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d615965d35%3A0xe8bce2daa0683346!2sR.%20Estados%20Unidos%2C%201585%20-%20Jardim%20America%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001427-002!5e0!3m2!1spt-BR!2sbr!4v1681769291338!5m2!1spt-BR!2sbr"
    } if (endereco.value == "14") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1771869915965!2d-46.6707131248887!3d-23.562078961618198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d501d20a77%3A0x1871a8747e787929!2sAlameda%20Lorena%2C%201821%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001424-007!5e0!3m2!1spt-BR!2sbr!4v1681769324056!5m2!1spt-BR!2sbr"
    } if (endereco.value == "15") {
        banner2.style.display = "block";
        Rua1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.274684984538!2d-46.668392624888874!3d-23.558576161489462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582b4e2bfa55%3A0x57bab3e2fa19f3ca!2sR.%20da%20Consola%C3%A7%C3%A3o%2C%202905%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001416-001!5e0!3m2!1spt-BR!2sbr!4v1681769345226!5m2!1spt-BR!2sbr"
    }
    //final da definição dos mapas



    /* Começo do gráfico de ocupação da rua */
    if (endereco.value == "1") {
        dadosLinha = [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
        graficoLinha.data.datasets = [{
            data: dadosLinha,
        }]
        graficoLinha.update();
    }
    if (endereco.value == "2") {
        dadosLinha = [4, 4, 5, 6, 10, 15, 13, 14, 10, 8, 7, 12, 18, 24, 32, 40, 38, 41, 35, 30, 21, 15, 10, 8];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    }
    if (endereco.value == "3") {
        dadosLinha = [9, 22, 19, 11, 38, 3, 40, 33, 29, 31, 24, 30, 15, 13, 8, 28, 42, 27, 20, 43, 2, 44, 37, 14];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "4") {
        dadosLinha = [8, 39, 4, 41, 35, 16, 20, 33, 7, 32, 24, 43, 31, 42, 12, 25, 14, 21, 1, 27, 40, 23, 13, 3];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "5") {
        dadosLinha = [33, 10, 16, 19, 20, 27, 14, 40, 39, 32, 24, 3, 23, 30, 41, 42, 17, 35, 18, 1, 6, 38, 11, 12];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "6") {
        dadosLinha = [36, 17, 6, 21, 20, 25, 10, 7, 34, 35, 39, 40, 13, 9, 31, 8, 18, 24, 22, 15, 29, 2, 33, 5];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "7") {
        dadosLinha = [16, 28, 37, 4, 43, 35, 1, 26, 17, 9, 18, 41, 22, 5, 21, 13, 40, 2, 31, 19, 24, 11, 42, 15];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "8") {
        dadosLinha = [23, 30, 4, 13, 22, 28, 43, 18, 5, 16, 12, 19, 25, 38, 35, 24, 20, 9, 41, 39, 2, 11, 42, 27];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "9") {
        dadosLinha = [12, 39, 23, 6, 17, 27, 38, 35, 33, 21, 8, 34, 11, 31, 25, 32, 36, 4, 40, 7, 2, 22, 19, 42];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "10") {
        dadosLinha = [5, 11, 42, 39, 19, 26, 36, 38, 33, 22, 13, 41, 9, 3, 2, 27, 23, 31, 16, 35, 28, 15, 17, 14];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "11") {
        dadosLinha = [39, 13, 18, 34, 10, 22, 28, 5, 2, 19, 16, 41, 12, 21, 30, 1, 43, 24, 7, 11, 27, 4, 33, 23];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "12") {
        dadosLinha = [31, 23, 34, 20, 6, 8, 27, 40, 21, 33, 42, 10, 19, 41, 7, 9, 15, 12, 38, 29, 4, 22, 26, 14];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "13") {
        dadosLinha = [35, 3, 28, 1, 11, 22, 31, 14, 8, 42, 43, 18, 39, 15, 9, 17, 13, 41, 33, 40, 6, 10, 26, 21];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "14") {
        dadosLinha = [9, 18, 15, 24, 36, 8, 42, 43, 28, 32, 13, 16, 35, 6, 39, 2, 20, 1, 31, 21, 27, 23, 19, 12];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    } if (endereco.value == "15") {
        dadosLinha = [28, 32, 19, 16, 37, 12, 5, 20, 9, 33, 10, 30, 22, 4, 34, 7, 41, 40, 15, 38, 43, 23, 26, 3];
        graficoLinha.data.datasets = [
            {
                data: dadosLinha,
            }
        ]
        graficoLinha.update();
    }
    /* Final do gráfico de ocupação da rua */

    /*Graficos de Pizza*/
    // gráfico do tempo de permanência
    if (endereco.value == "1") {
        dadosPizza = [10, 110];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `10 min`;
        graficoPizza.update();
    }
    if (endereco.value == "2") {
        dadosPizza = [50, 70];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `50 min`;
        graficoPizza.update();
    } if (endereco.value == "3") {
        dadosPizza = [25, 95];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `25 min`;
        graficoPizza.update();
    } if (endereco.value == "4") {
        dadosPizza = [90, 30];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `90 min`;
        graficoPizza.update();
    } if (endereco.value == "5") {
        dadosPizza = [120, 00];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `120 min`;
        graficoPizza.update();
    } if (endereco.value == "6") {
        dadosPizza = [45, 75];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `45 min`;
        graficoPizza.update();
    } if (endereco.value == "7") {
        dadosPizza = [60, 60];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `60 min`;
        graficoPizza.update();
    } if (endereco.value == "8") {
        dadosPizza = [7, 113];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `7 min`;
        graficoPizza.update();
    } if (endereco.value == "9") {
        dadosPizza = [25, 95];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `25 min`;
        graficoPizza.update();
    } if (endereco.value == "10") {
        dadosPizza = [27, 93];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `27 min`;
        graficoPizza.update();
    } if (endereco.value == "11") {
        dadosPizza = [15, 105];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `15 min`;
        graficoPizza.update();
    } if (endereco.value == "12") {
        dadosPizza = [10, 110];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `10 min`;
        graficoPizza.update();
    } if (endereco.value == "13") {
        dadosPizza = [45, 75];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `45 min`;
        graficoPizza.update();
    } if (endereco.value == "14") {
        dadosPizza = [50, 70];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `50 min`;
        graficoPizza.update();
    } if (endereco.value == "15") {
        dadosPizza = [17, 103];
        graficoPizza.data.datasets = [
            {
                data: dadosPizza,
                borderWidth: 1
            }
        ]
        graficoPizza.options.plugins.subtitle.text = `17 min`;
        graficoPizza.update();
    }
    /* Final do grafico de tempo de permanencia */

    /* Gráfico de ocupação média */
    if (endereco.value == "1") {
        
        graficoOcupacao.data.datasets = [{
            data: [45,55],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellow`;
        graficoOcupacao.options.plugins.subtitle.color = `yellow`;
        graficoOcupacao.options.backgroundColor = ['yellow', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `45%`;
        graficoOcupacao.update();
    }
    if (endereco.value == "2") {
        
        graficoOcupacao.data.datasets = [{
            data: [75,25],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellowgreen`;
        graficoOcupacao.options.plugins.subtitle.color = `yellowgreen`;
        graficoOcupacao.options.backgroundColor = ['yellowgreen', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `75%`;
        graficoOcupacao.update();
    }  if (endereco.value == "3") {
        
        graficoOcupacao.data.datasets = [{
            data: [95,5],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `green`;
        graficoOcupacao.options.plugins.subtitle.color = `green`;
        graficoOcupacao.options.backgroundColor = ['green', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `95%`;
        graficoOcupacao.update();
        
    }  if (endereco.value == "4") {
        
        graficoOcupacao.data.datasets = [{
            data: [33,67],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `red`;
        graficoOcupacao.options.plugins.subtitle.color = `red`;
        graficoOcupacao.options.backgroundColor = ['red', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `33%`;
        graficoOcupacao.update();
    }  if (endereco.value == "5") {
        
        graficoOcupacao.data.datasets = [{
            data: [50,50],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellow`;
        graficoOcupacao.options.plugins.subtitle.color = `yellow`;
        graficoOcupacao.options.backgroundColor = ['yellow', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `50%`;
        graficoOcupacao.update();
    }  if (endereco.value == "6") {
        
        graficoOcupacao.data.datasets = [{
            data: [80,20],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellowgreen`;
        graficoOcupacao.options.plugins.subtitle.color = `yellowgreen`;
        graficoOcupacao.options.backgroundColor = ['yellowgreen', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `80%`;
        graficoOcupacao.update();
    }  if (endereco.value == "7") {
        
        graficoOcupacao.data.datasets = [{
            data: [66,44],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellowgreen`;
        graficoOcupacao.options.plugins.subtitle.color = `yellowgreen`;
        graficoOcupacao.options.backgroundColor = ['yellowgreen', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `66%`;
        graficoOcupacao.update();
    }  if (endereco.value == "8") {
        
        graficoOcupacao.data.datasets = [{
            data: [90,10],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `green`;
        graficoOcupacao.options.plugins.subtitle.color = `green`;
        graficoOcupacao.options.backgroundColor = ['green', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `90%`;
        graficoOcupacao.update();

    }  if (endereco.value == "9") {
        
        graficoOcupacao.data.datasets = [{
            data: [83,17],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellowgreen`;
        graficoOcupacao.options.plugins.subtitle.color = `yellowgreen`;
        graficoOcupacao.options.backgroundColor = ['yellowgreen', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `83%`;
        graficoOcupacao.update();

    }  if (endereco.value == "10") {
        
        graficoOcupacao.data.datasets = [{
            data: [88,12],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellowgreen`;
        graficoOcupacao.options.plugins.subtitle.color = `yellowgreen`;
        graficoOcupacao.options.backgroundColor = ['yellowgreen', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `88%`;
        graficoOcupacao.update();

    }  if (endereco.value == "11") {
        
        graficoOcupacao.data.datasets = [{
            data: [72,28],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellowgreen`;
        graficoOcupacao.options.plugins.subtitle.color = `yellowgreen`;
        graficoOcupacao.options.backgroundColor = ['yellowgreen', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `72%`;
        graficoOcupacao.update();
    }  if (endereco.value == "12") {
        
        graficoOcupacao.data.datasets = [{
            data: [98,2],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `green`;
        graficoOcupacao.options.plugins.subtitle.color = `green`;
        graficoOcupacao.options.backgroundColor = ['green', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `98%`;
        graficoOcupacao.update();
    }  if (endereco.value == "13") {
        
        graficoOcupacao.data.datasets = [{
            data: [40,60],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellow`;
        graficoOcupacao.options.plugins.subtitle.color = `yellow`;
        graficoOcupacao.options.backgroundColor = ['yellow', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `40%`;
        graficoOcupacao.update();
    }  if (endereco.value == "14") {
        
        graficoOcupacao.data.datasets = [{
            data: [70,30],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `yellowgreen`;
        graficoOcupacao.options.plugins.subtitle.color = `yellowgreen`;
        graficoOcupacao.options.backgroundColor = ['yellowgreen', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `70%`;
        graficoOcupacao.update();
        //#F49C24
        
    }  if (endereco.value == "15") {
        
        graficoOcupacao.data.datasets = [{
            data: [10,90],
            borderWidth: 1
        }]
        graficoOcupacao.options.plugins.title.color = `red`;
        graficoOcupacao.options.plugins.subtitle.color = `red`;
        graficoOcupacao.options.backgroundColor = ['red', '#0C243C'];
        graficoOcupacao.options.plugins.subtitle.text = `10%`;
        graficoOcupacao.update();
    }
}

/*Final da function para a definição dos gráficos*/

