function carregarPagina(idFuncionario) {
    fetch(`/perfil/Perfil/${idFuncionario}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                infos = resposta[0]
                var nome = document.getElementById("nomeUsuario");
                nome.innerHTML = infos.nome;
                var Foto = document.getElementById("usuarioFoto");
                Foto.src = `../assets/${infos.foto}`;

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

                const datetime = new Date(infos.dataNascimento);
                const dia = datetime.getDate().toString().padStart(2, '0');
                const mes = (datetime.getMonth() + 1).toString().padStart(2, '0'); // Lembrando que os meses começam em 0
                const ano = datetime.getFullYear().toString();
                const dataCompleta = `${dia}/${mes}/${ano}`;

                var nome = document.getElementById("nomePessoal");
                var cpf = document.getElementById("cpf");
                var telefone = document.getElementById("telefone");
                var email = document.getElementById("email");
                nome.innerHTML = infos.nome;
                dataN.innerHTML = dataCompleta;
                cpf.innerHTML = infos.cpf;
                telefone.innerHTML = infos.telefone;
                email.innerHTML = infos.email;
                pessoal.style = "display: flex;";
                comercial.style = "display: none;";
                personalizar.style = "display: none;";

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

}

function mudarNome(idFuncionario) {
    var nomeNovo = outroNome.value;

    if (nomeNovo.length >= 5) {
        fetch(`/perfil/alterarNome/${idFuncionario}`, {
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

                infos = resposta[0]
                carregarPagina(idFuncionario);
                outroNome.value = "";

            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    } else {
        validacaoNome.innerHTML = "O seu novo nome tem que ter no mínimo <u>5</u> caracteres";
        outroNome.style = "border-color: red;";
    }
}

function novaImagem(idFuncionario) {
    const formData = new FormData();
    formData.append('imgNova', imgNova.files[0])

    fetch(`/perfil/alterarImagem/${idFuncionario}`, {
        method: "POST",
        body: formData
    })
        .then(res => {
            carregarPagina(idFuncionario);
        })
        .catch(err => {
            console.log(err);
        })
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