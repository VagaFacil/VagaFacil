





function logar() {
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var vaga = 'vaga@gmail.com';
    var facil = 'facil';
    var erro = false;

    if (email.indexOf('@') < 0 && email.indexOf('.com') < 0) {
        alert('Insira um email válido')
        erro = true;
    } else if (email != vaga) {
        alert('Email não cadastrado')
        erro = true
    } else if (senha != facil) {
        alert('Senha incorreta')
        erro = true;
    }
    
    if (erro == false && email == vaga && senha == facil) {
        location.href = '../daniel/dashboard.html';
    }
}