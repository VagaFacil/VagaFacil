function atualizarFormulario(idFuncionario) {
    //aguardar();
    fetch(`/listaUsuario/exibirUsuarios/${idFuncionario}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var lista = document.getElementById("scroll");
                var mensagem = document.createElement("p");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                lista.innerHTML = "";
                lista.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var lista = document.getElementById("scroll");
                lista.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    console.log(publicacao.nome)
                    // criando e manipulando elementos do HTML via JavaScript
                    var spanImg = document.createElement("img");
                    spanImg.className = "foto";
                    // spanImg.innerHTML = ;
                    var spanNome = document.createElement("h1");
                    spanNome.className = "nome";
                    spanNome.innerHTML = publicacao.nome;
                    var spanSeta = document.createElement("img");
                    spanSeta.className = "seta";
                    // spanSeta.innerHTML = ;
                    var divFuncionario = document.createElement("div_funcionario")
                    divFuncionario.className = "usuarios"
                    divFuncionario.setAttribute("onclick", `exibir(${publicacao.funcionario})`)

                    divFuncionario.appendChild(spanImg)
                    divFuncionario.appendChild(spanNome)
                    divFuncionario.appendChild(spanSeta)
                    lista.appendChild(divFuncionario);
                }

                // finalizarAguardar();
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        // finalizarAguardar();
    });
}


function exibir(idFuncionario) {
    fetch(`/listaUsuario/exibirInfos/${idFuncionario}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta[0]
                var nome = document.getElementById("nome");
                var dataN = document.getElementById("dataN");
                var cpf = document.getElementById("cpf");
                var telefone = document.getElementById("telefone");
                var email = document.getElementById("email");
                nome.innerHTML = infos.nome;
                dataN.innerHTML = infos.nascimento;
                cpf.innerHTML = infos.cpf;
                telefone.innerHTML = infos.telefone;
                email.innerHTML = infos.email;
                // finalizarAguardar();
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        // finalizarAguardar();
    });
}





function pesquisa() {
    var usuarios = [{ nome: 'anizio mesquita', usuario: div_anizio, }, { nome: 'bruno lima', usuario: div_bruno },
    { nome: 'daniel yuzo', usuario: div_daniel }, { nome: 'gabriel branco', usuario: div_gabriel },
    { nome: 'henrique bechis', usuario: div_henrique }, { nome: 'lucas neves', usuario: div_lucas }];
    var valor = ipt_pesquisa.value.toLowerCase();

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome.toLowerCase().indexOf(valor) !== -1) {
            usuarios[i].usuario.style.display = "grid";
        } else {
            usuarios[i].usuario.style.display = "none";
        }
    }
}