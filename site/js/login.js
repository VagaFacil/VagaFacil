
function logar() {
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var vaga = 'vaga';
    var facil = 'facil'
    if (email == vaga && senha == facil) {
        location.href = '../daniel/dashboard.html';
    } else {
        alert('Email ou senha incorreto!')
    }
}