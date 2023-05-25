function carregarPagina(idFuncionario) {
    fetch(`/perfil/exibirPerfil/${idFuncionario}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta[0]
                var nome = document.getElementById("nomeUsuario");
                nome.innerHTML = infos.nome;
                var Foto = document.getElementById("usuarioFoto");
                Foto.src = infos.foto;

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}

function exibir_informacaoPessoal(idFuncionario) {
    fetch(`/perfil/exibirDadosPessoais/${idFuncionario}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta[0]
                var nome = document.getElementById("nomePessoal");
                var dataN = document.getElementById("dataN");
                var cpf = document.getElementById("cpf");
                var telefone = document.getElementById("telefone");
                var email = document.getElementById("email");
                nome.innerHTML = infos.nome;
                dataN.innerHTML = infos.dataNascimento;
                cpf.innerHTML = infos.cpf;
                telefone.innerHTML = infos.telefone;
                email.innerHTML = infos.email;
                pessoal.style = "display: flex;";
                comercial.style = "display: none;";
                personalizar.style = "display: none;";
                // atuacao.style = "display: none;";

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function exibir_comercial(idFuncionario) {
    fetch(`/perfil/exibirDadosEmpresariais/${idFuncionario}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta[0]
                var nome = document.getElementById("nomeEmpresa");
                var cep = document.getElementById("cep");
                var localizacao = document.getElementById("logradouro");
                var CNPJ = document.getElementById("cnpj");
                var Cargo = document.getElementById("cargo");
                nome.innerHTML = infos.razao;
                cep.innerHTML = infos.cep;
                localizacao.innerHTML = infos.logradouro;
                CNPJ.innerHTML = infos.cnpj;
                Cargo.innerHTML = infos.cargo;
                pessoal.style = "display: none;";
                comercial.style = "display: flex;";
                personalizar.style = "display: none;";
                // atuacao.style = "display: none;";
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function exibir_personalizar() {
    pessoal.style = "display: none;";
    comercial.style = "display: none;";
    personalizar.style = "display: flex;";
    // atuacao.style = "display: none;";
}

function mudarNome() {
    var nomeNovo = outroNome.value;
    fetch(`/perfil/alterarNome/${sessionStorage.getItem("ID_FUNCIONARIO")}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeNovo
        })
    }).then(function (resposta) {
        console.log(resposta)
        if (resposta.ok) {
            if (nomeNovo.length >= 5) {
                infos = resposta[0]
                carregarPagina(idFuncionario);
            } else {
                validacaoNome.innerHTML = "O seu novo nome tem que ter no mínimo <u>5</u> caracteres";
                outroNome.style = "border-color: red;";
            }
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}


// function novaImagem() {
//     const perfilImagemInput = document.getElementById('img');
//     const perfilImagemUsuario = document.getElementById('usuarioFoto');

//     perfilImagemInput.addEventListener("change", function () {
//         const arquivo = this.files[0];
//         const leitor = new FileReader();
//         leitor.onload = function () {
//             perfilImagemUsuario.src = leitor.result;
//         };
//         leitor.readAsDataURL(arquivo);
//     });
// }