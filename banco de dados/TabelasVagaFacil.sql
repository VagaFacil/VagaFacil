create database VagaFacil;
use VagaFacil;

create table empresa (
		idEmpresa int primary key auto_increment,
        razao varchar(45),
        cnpj char(18)        
);

create table filial (
		idFilial int primary key auto_increment,
        cep char(9),
        rua varchar(60),
        numero decimal(4,0),
        complemento varchar(45),
        fkEmpresa int,
        foreign key (fkEmpresa) references empresa(idEmpresa)
)auto_increment = 50000;

create table Usuario (
		idUsuario int primary key auto_increment,
        nome varchar(50),
        email varchar(100),
        senha varchar(18),
        telefone char(14),
        fkFilial int,
        foreign key (fkFilial) references filial(idFilial)
)auto_increment = 100000;

create table sensor(
		idsensor int primary key auto_increment,
		cep char(9),
		numRua varchar(45),
		numSensor varchar(45)
)auto_increment=150000;

create table dados(
		idDados int primary key auto_increment,
		dataHora datetime,
		valor varchar(45),
		fkSensor int,
		foreign key(fksensor) references sensor(idsensor)
)auto_increment=200000;
