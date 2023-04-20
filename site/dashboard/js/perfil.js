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
    menu.innerHTML = `<p> ${nome.value} </p>`;
}