
// Js que está sendo usado


function cadastrar() {
    // Card 1
    var nomeVar = ipt_nome.value;
    var cargoVar = ipt_cargo.value;
    var telefoneVar = ipt_telefone.value;
    var cpfVar = ipt_cpf.value;
    var dataNascimentoVar = ipt_dataN.value;

    // // Adaptar a data de Nascimento para o MySQL
    // const datetime = new Date(ipt_dataN.value);
    //         const dia = datetime.getDate();
    //         const mes = (datetime.getMonth() + 1) // Lembrando que os meses começam em 0
    //         const ano = datetime.getFullYear();
    //         var dataNascimentoVar = `${ano}-${mes}-${dia}`;

    // var fkSuperiorVar = null;

    // Card 2
    var razaoVar = ipt_razao.value;
    var cnpjVar = ipt_cnpj.value;
    var cepVar = ipt_cep.value;
    var numeroVar = ipt_numero.value;
    var complementoVar = ipt_complemento.value;
    var bairroVar = ipt_bairro.value;
    var enderecoVar = ipt_endereco.value;

    // Card 3
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confirmarSenhaVar = ipt_confirmarSenha.value;

    var erroCadastro = false;

    // Inicio Validação
    if (nomeVar.length < 3) {
        vNome.style.display = 'block';
        ipt_nome.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vNome.style.display = 'none';
        ipt_nome.style = 'border-color: #32a7b1';
    }
    if (cargoVar.length < 3) {
        vCargo.style.display = 'block';
        ipt_cargo.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vCargo.style.display = 'none';
        ipt_cargo.style = 'border-color: #32a7b1';
    }
    if (dataNascimentoVar.length < 10) {
        vDataN.style.display = 'block';
        ipt_dataN.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vDataN.style.display = 'none';
        ipt_dataN.style = 'border-color: #32a7b1';
    }
    if (cpfVar.length != 14) {
        vCpf.style.display = 'block';
        ipt_cpf.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vCpf.style.display = 'none';
        ipt_cpf.style = 'border-color: #32a7b1';
    }
    if (telefoneVar.length > 14 || telefoneVar.length < 13) {
        vTelefone.style.display = 'block';
        ipt_telefone.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vTelefone.style.display = 'none';
        ipt_telefone.style = 'border-color: #32a7b1';
    }


    if (razaoVar.length < 3) {
        vRazao.style.display = 'block';
        ipt_razao.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vRazao.style.display = 'none';
        ipt_razao.style = 'border-color: #32a7b1';
    }
    if (cnpjVar.length < 3) {
        vCnpj.style.display = 'block';
        ipt_cnpj.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vCnpj.style.display = 'none';
        ipt_cnpj.style = 'border-color: #32a7b1';
    }
    if (cepVar.length != 8) {
        vCep.style.display = 'block';
        ipt_cep.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vCep.style.display = 'none';
        ipt_cep.style = 'border-color: #32a7b1';
    }
    if (bairroVar.length < 3) {
        vBairro.style.display = 'block';
        ipt_bairro.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vBairro.style.display = 'none';
        ipt_bairro.style = 'border-color: #32a7b1';
    }
    if (enderecoVar.length == 0) {
        vEndereco.style.display = 'block';
        ipt_endereco.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vEndereco.style.display = 'none';
        ipt_endereco.style = 'border-color: #32a7b1';
    }
    if (numeroVar.length == 0 || isNaN(numeroVar)) {
        vNumero.style.display = 'block';
        ipt_numero.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vNumero.style.display = 'none';
        ipt_numero.style = 'border-color: #32a7b1';
    }

    if (emailVar.indexOf('@') < 0 && emailVar.indexOf('.com') < 0) {
        vEmail.style.display = 'block';
        ipt_email.style = 'border-color: red';
        erroCadastro = true;;
    } else {
        vEmail.style.display = 'none';
        ipt_email.style = 'border-color: #32a7b1';
    }
    if (senhaVar.length < 6) {
        vSenha.style.display = 'block';
        ipt_senha.style = 'border-color: red';
        erroCadastro = true;;
    } else {
        vSenha.style.display = 'none';
        ipt_senha.style = 'border-color: #32a7b1';
    }
    if (confirmarSenhaVar != senhaVar) {
        vConfirmarSenha.style.display = 'block';
        ipt_confirmarSenha.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vConfirmarSenha.style.display = 'none';
        ipt_confirmarSenha.style = 'border-color: #32a7b1';
    }
    if (confirmarSenhaVar == "") {
        vConfirmarSenhaInvalida.style.display = 'block';
        ipt_confirmarSenha.style = 'border-color: red';
        erroCadastro = true;
    } else {
        vConfirmarSenhaInvalida.style.display = 'none';
        ipt_confirmarSenha.style = 'border-color: #32a7b1';
    }
    //Final Validação

    if (erroCadastro) {
        return false;
    }
    else {
        // Enviando o valor da nova input
        fetch("/funcionario/cadastrarEmpresas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/funcionario.js
                nomeServer: nomeVar,
                cargoServer: cargoVar,
                emailServer: emailVar,
                senhaServer: senhaVar,
                telefoneServer: telefoneVar,
                cpfServer: cpfVar,
                dataNascimentoServer: dataNascimentoVar,
                // fkSuperiorServer: fkSuperiorVar
                razaoServer: razaoVar,
                cnpjServer: cnpjVar,
                nomeBairroServer: bairroVar,
                enderecoServer: enderecoVar,
                cepServer: cepVar,
                numeroServer: numeroVar,
                complementoServer: complementoVar
            })
        }).then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                inserirFk();
                ipt_nome.value = '';
                ipt_cargo.value = '';
                ipt_dataN.value = '';
                ipt_cpf.value = '';
                ipt_telefone.value = '';
                ipt_razao.value = '';
                ipt_cnpj.value = '';
                ipt_cep.value = '';
                ipt_endereco.value = '';
                ipt_numero.value = '';
                ipt_complemento.value = '';
                ipt_bairro.value = '';
                ipt_email.value = '';
                ipt_senha.value = '';
                ipt_confirmarSenha.value = '';
                setTimeout(() => {
                    window.location = "login.html";
                }, "2000")
                cardErroCadastro.style.display = "block"
                cardErroCadastro.style.border = "2px solid greenyellow"
                cardErroCadastro.style.color = "greenyellow"
                mensagem_erroCadastro.innerHTML = `✅Conta cadastrada com sucesso!✅<br>Redirecionando...✅`;
            } else {
                cardErroCadastro.style.display = "block"
                    cardErroCadastro.style.border = "2px solid red"
                    cardErroCadastro.style.color = "red"
                    mensagem_erroCadcardErroCadastro.innerHTML = "❌Erro ao realizar cadastro❌";
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;


    }

}

function inserirFk() {
    var cpfVar = ipt_cpf.value;
    var cnpjVar = ipt_cnpj.value;
    var cepVar = ipt_cep.value;
    var numeroVar = ipt_numero.value;
    var complementoVar = ipt_complemento.value;

    fetch("/funcionario/inserirFk", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cpfServer: cpfVar,
            cnpjServer: cnpjVar,
            cepServer: cepVar,
            numeroServer: numeroVar,
            complementoServer: complementoVar
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
            console.log("Fk's inseridas com sucesso!")
        } else {
            throw ("Houve um erro ao inserir as Fks's!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
}



function cpf(v) {
    if (v.length == 10) {
        v = v.replace(/\D/g, "")                    //Remove tudo o que não é dígito
        v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
        ipt_cpf.value = v;
        return v
    }
}

function cnpj(v) {
    if (v.length == 13) {
        v = v.replace(/\D/g, "")                           //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/, "$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/(\d{4})(\d)/, "$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
        ipt_cnpj.value = v;

        return v
    }
}

function ver_cep() {
    if (ipt_cep.value.length == 8) {
        fetch(`https://viacep.com.br/ws/${ipt_cep.value}/json/`).then(nome_qualquer => {
            return nome_qualquer.json();
        }).then(corpo => {
            document.getElementById('ipt_endereco').value = corpo.logradouro;
            document.getElementById('ipt_bairro').value = corpo.bairro;
        })

    }
}
