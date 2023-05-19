CREATE USER 'vaga'@'localhost' identified by 'urubu100';
GRANT INSERT, SELECT, UPDATE, DELETE ON vagafacil.* to 'vaga'@'localhost';
flush privileges;

use vagafacil;
select * from empresa;
select * from filial;
select * from funcionario;
select * from endereco;
select * from sensor;
select * from dados;
select * from bairro;

--
select sup.idFuncionario as superior,
 func.idFuncionario as funcionarios,
 func.nome
 from funcionario as sup join funcionario as func 
on func.fkSuperior = sup.idFuncionario;


update funcionario set foto = 'https://moodle.sptech.school/pluginfile.php/20613/user/icon/degrade/f1?rev=3056746' where idFuncionario = 100005;

select * from funcionario where idFuncionario = 100001