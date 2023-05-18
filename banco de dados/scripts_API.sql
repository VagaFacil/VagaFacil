CREATE USER 'vaga'@'localhost' identified by 'urubu100';
GRANT INSERT, SELECT, UPDATE, DELETE ON vagafacil.* to 'vaga'@'localhost';
flush privileges;


select * from empresa;
select * from filial;
select * from funcionario;
select * from endereco;
select * from sensor;
select * from dados;
select * from bairro;

--
select * from funcionario as sup join funcionario as func 
on func.fkSuperior = sup.idFuncionario;

select 
from 
funcionario as sup join funcionario as func 
on func.fkSuperior = sup.idFuncionario;

select * from funcionario where idFuncionario = 100001