
var email = 'vaga@gmail.com';
var erro = false

function enviar() {
    if (rec_email.value == email) {
        div_erro.style.display = 'none';
        div_tela1.style.display = "none";
        div_tela2.style.display = "block";

    } else {
        div_erro.style.display = 'block';
    }
}
function cancelar() {
    div_tela1.style.display = "flex";
    div_tela2.style.display = "none";
    rec_email.value = '';
}

// Tela 02
// Validando a nova senha

function continuar() {
    // Variáveis gerais
    var senha = ipt_senha.value;
    var erroMai = false;
    var erroMin = false;
    var erroNum = false; 
    var erroCar = false;

    // // Validar 1 letra maiúscula
    // if (condition) {
    //     erro1.style.color = 'red';
    //     erroMai = true
    // } else {
    //     erro1.style.color = 'greenyellow';
    //     erroMai = false
    // }

    // // Validar 1 letra minúscula
    // if (condition) {
    //     erro2.style.color = 'red';
    //     erroMin = true
    // } else {
    //     erro2.style.color = 'greenyellow';
    //     erroMin = false
    // }

    // // Validar 1 número
    // if (condition) {
    //     erro3.style.color = 'red';
    //     erroNum = true
    // } else {
    //     erro3.style.color = 'greenyellow';
    //     erroNum = false
    // }

    // Validar 8+ caracteres
    if (senha.length < 8) {
        erro4.style.color = 'red';
        erroCar = true
    } else {
        erro4.style.color = 'greenyellow';
        erroCar = false
    }

    // Verigicar se tme erro
    var pode_seguir = erroMai == false && erroMin == false && erroNum == false && erroCar == false;
    if (pode_seguir) {
        div_tela1.style.display = "none";
        div_tela2.style.display = "none";
        div_tela3.style.display = "block";
    }

}
