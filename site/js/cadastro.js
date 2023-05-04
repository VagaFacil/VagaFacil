// Variáveis globais

// card1
var erroNome = false;
var erroCargo = false;
var erroDatan = false;
var erroCpf = false;
var erroTelefone = false;

// card2
var erroRazao = false;
var erroCnpj = false;
var erroCep = false;
var erroEndereco = false;
var erroNumero = false;
var erroComp = false;
var erroBairro = false;

// card3
var erroEmail = false;
var erroSenha = false;
var erroSenhaRep = false;

// cards geral
var validarCard1 = false;
var validarCard2 = false;
var validarCard3 = false;


// Validações

function cadastrar() {
    // card1
    // nome
    if (ipt_nome.value.length < 3) {
        vNome.style.display = 'block';
        ipt_nome.style = 'border-color: red';
        erroNome = true;;
    } else {
        vNome.style.display = 'none';
        ipt_nome.style = 'border-color: #32a7b1';
        erroNome = false;
    }
    // sobrenome
    if (ipt_cargo.value.length < 3) {
        vCargo.style.display = 'block';
        ipt_cargo.style = 'border-color: red';
        erroCargo = true;
    } else {
        vCargo.style.display = 'none';
        ipt_cargo.style = 'border-color: #32a7b1';
        erroCargo = false;
    }
    // data de nascimento
    // cpf
    // telefone
    // tem erro no card?
    validarCard1 = erroNome == false && erroCargo == false && erroDatan == false && erroCpf == false && erroTelefone == false;
    
    // card2
    // razão
    if (ipt_razao.value.length < 3) {
        vNome.style.display = 'block';
        ipt_nome.style = 'border-color: red';
        erroNome = true;;
    } else {
        vNome.style.display = 'none';
        ipt_nome.style = 'border-color: #32a7b1';
        erroNome = false;
    }
    // cnpj
    // cep
    // endereço
    // número
    // complemento - sem validação
    // bairro
    // tem erro no card?
    validarCard2 = erroRazao == false && erroCnpj == false && erroCep == false && erroEndereco == false && erroNumero == false && erroComp == false && erroBairro == false;

    // card3
    // email
    if (ipt_email.value.indexOf('@') < 0 && ipt_email.value.indexOf('.com') < 0) {
        vEmail.style.display = 'block';
        ipt_email.style = 'border-color: red';
        erroEmail = true;;
    } else {
        vEmail.style.display = 'none';
        ipt_email.style = 'border-color: #32a7b1';
        erroEmail = false;
    }
    // senha
    // senha repetida
    // tem erro no card?
    validarCard3 = erroEmail == false && erroSenha == false && erroSenhaRep == false;

    // validar os 3 cards para seguir
    if (validarCard1 && validarCard2 && validarCard3) {
        location.href = '../login.html'
    }
    
}

// function ver_cep() {
//     if (ipt_cep.value.length == 8) {
//         fetch(`https://viacep.com.br/ws/${ipt_cep.value}/json/`).then(nome_qualquer=>{
//             return nome_qualquer.json();
//         }).then(corpo=>{
//             document.getElementById('ipt_endereco').value = corpo.logradouro;
//             document.getElementById('ipt_bairro').value = corpo.bairro;
//         })
        
//     }
// }