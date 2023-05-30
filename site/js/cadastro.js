// Não está sendo utilizado


function cadastrar() {
   
    if (nomeVar.length < 3) {
        vNome.style.display = 'block';
        ipt_nome.style = 'border-color: red';
        erroNome = true;
    } else {
        vNome.style.display = 'none';
        ipt_nome.style = 'border-color: #32a7b1';
    }
    if (cargoVar.length < 3) {
        vCargo.style.display = 'block';
        ipt_cargo.style = 'border-color: red';
        erroCargo = true;
    } else {
        vCargo.style.display = 'none';
        ipt_cargo.style = 'border-color: #32a7b1';
    }
    if (dataNascimentoVar.length < 10) {
        vDataN.style.display = 'block';
        ipt_dataN.style = 'border-color: red';
        erroDatan = true;
    } else {
        vDataN.style.display = 'none';
        ipt_dataN.style = 'border-color: #32a7b1';
    }
    if (cpfVar.length != 13 ) {
        vCpf.style.display = 'block';
        ipt_cpf.style = 'border-color: red';
        erroCpf = true;
    } else {
        vCpf.style.display = 'none';
        ipt_cpf.style = 'border-color: #32a7b1';
    }
    if (telefoneVar.length > 14 || telefoneVar.length < 13) {
        vTelefone.style.display = 'block';
        ipt_telefone.style = 'border-color: red';
        erroTelefone = true;
    } else {
        vTelefone.style.display = 'none';
        ipt_telefone.style = 'border-color: #32a7b1';
    }
    validarCard1 = erroNome == false && erroCargo == false && erroDatan == false && erroCpf == false && erroTelefone == false;
    
    if (ipt_razao.value.length < 3) {
        vNome.style.display = 'block';
        ipt_nome.style = 'border-color: red';
        erroNome = true;;
    } else {
        vNome.style.display = 'none';
        ipt_nome.style = 'border-color: #32a7b1';
        erroNome = false;
    }
    validarCard2 = erroRazao == false && erroCnpj == false && erroCep == false && erroEndereco == false && erroNumero == false && erroComp == false && erroBairro == false;
    
    if (ipt_email.value.indexOf('@') < 0 && ipt_email.value.indexOf('.com') < 0) {
        vEmail.style.display = 'block';
        ipt_email.style = 'border-color: red';
        erroEmail = true;
    } else {
        vEmail.style.display = 'none';
        ipt_email.style = 'border-color: #32a7b1';
        erroEmail = false;
    }
    validarCard3 = erroEmail == false && erroSenha == false && erroSenhaRep == false;
    
    if (validarCard1 && validarCard2 && validarCard3) {
        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/funcionario/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    
                    //sessionStorage.ID_FUNCIONARIO = json.idFuncionario;
                    sessionStorage.NOME_FUNCIONARIO = json.nome;
                    sessionStorage.CARGO_FUNCIONARIO = json.cargo;
                    sessionStorage.EMAIL_FUNCIONARIO = json.email;
                    //sessionStorage.FK_SUPERIOR = json.fkSuperior

                    setTimeout(function () {
                        window.location = "./dashboard/usuarios.html";
                    }, 2000); // apenas para exibir o loading

                });
                // cardErroLogin.style.display = "block"
                // cardErroLogin.style.border = "2px solid greenyellow"
                // cardErroLogin.style.color = "greenyellow"
                // mensagem_erroLogin.innerHTML = "✅Entrando! Aguarde...✅";
            } else {
                // cardErroLogin.style.display = "block"
                // cardErroLogin.style.border = "2px solid red"
                // cardErroLogin.style.color = "red"
                // mensagem_erroLogin.innerHTML = "❌Conta não cadastrada❌";
            
                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
        // location.href = '../login.html'
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