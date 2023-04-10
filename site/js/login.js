



var email = ipt_email.value;
var senha = ipt_senha.value;
var vaga = 'vaga@gmail.com';
var facil = 'facil';
var erro = false;

function logar() {
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var vaga = 'vaga@gmail.com';
    var facil = 'facil';
    var erro = false;

    // Validação do email
    if (email == vaga) {
        ipt_email.style = 'border-color: #32a7b1';
        erroE1.style.display = 'none';
        erroE2.style.display = 'none';
        erroE3.style.display = 'none';
    } else {
        ipt_email.style = 'border-color: red';
    }

    if (email == '') {
        erroE1.style.display = 'block';
        erroE2.style.display = 'none';
        erroE3.style.display = 'none';

        erro = true;
    } else if (email.indexOf('@') < 0 && email.indexOf('.com') < 0) {
        erroE1.style.display = 'none';
        erroE2.style.display = 'block';
        erroE3.style.display = 'none';

        ipt_senha.style = 'border-color: #32a7b1';

        erro = true;
    } else if (email != vaga) {
        erroE1.style.display = 'none';
        erroE2.style.display = 'none';
        erroE3.style.display = 'block';

        ipt_senha.style = 'border-color: #32a7b1';

        erro = true
    }

    // Validação da senha

    if (senha == facil) {
        ipt_senha.style = 'border-color: #32a7b1';
        erroS1.style.display = 'none';
        erroS2.style.display = 'none';
    } else {
        ipt_senha.style = 'border-color: red';
    }

    if (senha == '') {
        erroS1.style.display = 'block';
        erroS2.style.display = 'none';
        erro = true;

    } else if (senha != facil) {
        erroS1.style.display = 'none';
        erroS2.style.display = 'block';
        erro = true;
    }

    if (erro == false && email == vaga && senha == facil) {
        ipt_email.style = 'border-color: #32a7b1';
        ipt_senha.style = 'border-color: #32a7b1';
        location.href = '../daniel/dashboard.html';
    }
}