function preencherCampos(){
        
    if (sessionStorage.CEP == undefined) {
        ipt_cep.disabled = false;
    } else {
        ipt_cep.disabled = true;
        ipt_cep.value = sessionStorage.CEP
    }

    if (sessionStorage.LOGRADOURO == undefined) {
        ipt_endereco.disabled = false;
    } else {
        ipt_endereco.disabled = true;
        ipt_endereco.value = sessionStorage.LOGRADOURO
    }

    if (sessionStorage.BAIRRO == undefined) {
        ipt_bairro.disabled = false;
    } else {
        ipt_bairro.disabled = true;
        ipt_bairro.value = sessionStorage.BAIRRO
    }

    if(sessionStorage.FK_FILIAIS == undefined) {
        ipt_razao.disabled = false;
        ipt_cnpj.disabled = false;
    } else {

        
        fetch('/funcionario/listarEmpresa/' + sessionStorage.FK_FILIAIS.split(',')[0]).then(function (resposta) {
            
            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    
                    ipt_razao.disabled = true;
                    ipt_cnpj.disabled = true;

                    ipt_razao.value = json[0].razao;
                    ipt_cnpj.value = json[0].cnpj;
                });
            } else {
                console.log("Houve um erro ao tentar obter os dados da empresa!");
                ipt_razao.disabled = false;
                ipt_cnpj.disabled = false;
                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
            ipt_razao.disabled = false;
            ipt_cnpj.disabled = false;
        });
    }
}

    function cadastrar() {
        // Card 1
        var nomeVar = ipt_nome.value;
        var cargoVar = ipt_cargo.value;
        var telefoneVar = ipt_telefone.value;
        var cpfVar = ipt_cpf.value;

        // Adaptar a data de Nascimento para o MySQL
        const datetime = new Date(ipt_dataN.value);
                const dia = datetime.getDate().toString().padStart(2, '0');
                const mes = (datetime.getMonth() + 1).toString().padStart(2, '0'); // Lembrando que os meses começam em 0
                const ano = datetime.getFullYear().toString();
                var dataNascimentoVar = `${ano}/${mes}/${dia}`;
        
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
        if (cpfVar.length != 14 ) {
            vCpf.style.display = 'block';
            ipt_cpf.style = 'border-color: red';
            erroCadastro = true;
        } else {
            vCpf.style.display = 'none';
            ipt_cpf.style = 'border-color: #32a7b1';
        }
        if (telefoneVar.length > 15 || telefoneVar.length < 13) {
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
        if (bairroVar.length == 0) {
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
        if ( confirmarSenhaVar == "") {
            vConfirmarSenhaInvalida.style.display = 'block';
            ipt_confirmarSenha.style = 'border-color: red';
            erroCadastro = true;
        } else {
            vConfirmarSenhaInvalida.style.display = 'none';
            ipt_confirmarSenha.style = 'border-color: #32a7b1';
        }

        if (erroCadastro) {
            return false;
        }
        else {
            // Enviando o valor da nova input
            fetch("/funcionario/cadastrar", {
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
                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000")
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
            return false;
        }

    }


// v = ipt_cpf.value

function cpf(v){
    if (v.length == 10) {
        v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                                 //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
        ipt_cpf.value = v
        return v
    }
}

function cnpj(v){
    if (v.length == 13) {  
        v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
        v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
        v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
        ipt_cnpj.value = v

        return v
    }
}