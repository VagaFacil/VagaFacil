function atualizarFormulario(idFuncionario) {
    aguardar();
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
                // console.log("Dados recebidos: ", JSON.stringify(resposta));

                var lista = document.getElementById("scroll");
                lista.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    // criando e manipulando elementos do HTML via JavaScript
                    var spanImg = document.createElement("img");
                    spanImg.className = "foto";
                    spanImg.setAttribute("src", `../assets/${publicacao.foto}`)
                    var spanNome = document.createElement("h1");
                    spanNome.className = "nome";
                    spanNome.innerHTML = publicacao.nome;
                    var spanSeta = document.createElement("img");
                    spanSeta.className = "seta";
                    spanSeta.setAttribute("src", `https://cdn-icons-png.flaticon.com/512/4028/4028647.png`)
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
                // console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta[0]

                const datetime = new Date(infos.nascimento);
                const dia = datetime.getDate().toString().padStart(2, '0');
                const mes = (datetime.getMonth() + 1).toString().padStart(2, '0'); // Lembrando que os meses começam em 0
                const ano = datetime.getFullYear().toString();
                const dataCompleta = `${dia}/${mes}/${ano}`;

                var nome = document.getElementById("nome");
                var cpf = document.getElementById("cpf");
                var telefone = document.getElementById("telefone");
                var email = document.getElementById("email");
                nome.innerHTML = infos.nome;
                dataN.innerHTML = dataCompleta;
                cpf.innerHTML = infos.cpf;
                telefone.innerHTML = infos.telefone;
                email.innerHTML = infos.email;
                // finalizarAguardar();
                funcExibido = infos.funcExibido;
                btnExcluir.style.display = 'block';
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}


function deletarUsuario(funcExibido) {
    fetch(`/listaUsuario/deletarUsuario/${funcExibido}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    }).then(function (resposta) {
        // console.log("ESTOU NO THEN DO deletarUsuario()!")

        if (resposta.ok) {
            // console.log(resposta);

            resposta.json().then(json => {
                // console.log(json);
                // console.log(JSON.stringify(json));
            });
            cardErroDelete.style.display = "block"
            cardErroDelete.style.border = "2px solid greenyellow"
            cardErroDelete.style.color = "greenyellow"
            mensagem_erroDelete.innerHTML = "✅Funcionário deletado com sucesso!✅<br>Atualizando a página...";
            // console.log("Funcionário deletado com sucesso! Atualizando a página...");
            setTimeout(()=> {location.reload()},3000)
        } else {
            cardErroDelete.style.display = "block"
            cardErroDelete.style.border = "2px solid red"
            cardErroDelete.style.color = "red"
            mensagem_erroDelete.innerHTML = "❌Funcionário não cadastrado❌";

            console.log("Houve um erro ao tentar deletar o funcionário!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
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


function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

// function finalizarAguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";
// }
