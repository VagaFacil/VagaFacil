function exibir_informacaoPessoal() {
    pessoal.style = "display: flex;";
    comercial.style = "display: none;";
    atuacao.style = "display: none;";
    personalizar.style = "display: none;";
}

function exibir_comercial() {
    pessoal.style = "display: none;";
    comercial.style = "display: flex;";
    atuacao.style = "display: none;";
    personalizar.style = "display: none;";
}

function exibir_atuacao() {
    pessoal.style = "display: none;";
    comercial.style = "display: none;";
    atuacao.style = "display: flex;";
    personalizar.style = "display: none;";
}

function exibir_personalizar() {
    pessoal.style = "display: none;";
    comercial.style = "display: none;";
    atuacao.style = "display: none;";
    personalizar.style = "display: flex;";
}

function mudar() {
    if (alterarNome.value.length >= 5) {
        nomeUsuario.innerHTML = alterarNome.value;
        nomePessoal.innerHTML = alterarNome.value;
    } else {
        validacaoNome.innerHTML = "O seu novo nome tem que ter no mínimo <u>5</u> caracteres";
        alterarNome.style = "border-color: red;";
    }
}

function novaImagem() {
    const perfilImagemInput = document.getElementById('img');
    const perfilImagemUsuario = document.getElementById('usuario');

    perfilImagemInput.addEventListener("change", function () {
        const arquivo = this.files[0];
        const leitor = new FileReader();
        leitor.onload = function () {
            perfilImagemUsuario.src = leitor.result;
        };
        leitor.readAsDataURL(arquivo);
    });
}