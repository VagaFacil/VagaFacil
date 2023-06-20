

function menuH() {
    listaMenuH.style.display = 'block';
}

function seta() {
    listaMenuH.style.display = 'none';
}

function sair() {
    alertSair.style.display = 'block';
}

function sim() {
    sessionStorage.clear();
    location.href = '../login.html'
    alertSair.style.display = 'none';
}

function nao() {
    alertSair.style.display = 'none';
}