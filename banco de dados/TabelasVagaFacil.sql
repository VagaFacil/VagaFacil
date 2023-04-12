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
		valor char(1),
		fkSensor int,
		foreign key(fksensor) references sensor(idsensor)
)auto_increment=200000;

insert into sensor values (null,'04100-000', '202', '1');
insert into sensor values (null,'03100-000', '307', '2');
insert into sensor values (null,'03000-000', '472', '3');
insert into sensor values (null,'04500-000', '532', '4');
insert into sensor values (null,'04700-000', '298', '5');
insert into sensor values (null,'05300-000', '397', '6');
insert into sensor values (null,'05400-000', '485', '7');
insert into sensor values (null,'05800-000', '604', '8');
insert into sensor values (null,'01000-000', '200', '9');
insert into sensor values (null,'01300-000', '578', '10');

select * from sensor;

-- Dados referenter au sensor Numero 1
insert into dados values (null, '2023-04-10 07:00:00', '0', 150000);
insert into dados values (null, '2023-04-10 07:30:00', '0', 150000);
insert into dados values (null, '2023-04-10 08:00:00', '0', 150000);
insert into dados values (null, '2023-04-10 08:30:00', '1', 150000);
insert into dados values (null, '2023-04-10 09:00:00', '1', 150000);
insert into dados values (null, '2023-04-10 09:30:00', '1', 150000);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150000);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150000);
insert into dados values (null, '2023-04-10 11:00:00', '0', 150000);
insert into dados values (null, '2023-04-10 11:30:00', '0', 150000);
insert into dados values (null, '2023-04-10 12:00:00', '1', 150000);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150000);
insert into dados values (null, '2023-04-10 13:00:00', '1', 150000);
insert into dados values (null, '2023-04-10 13:30:00', '1', 150000);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150000);
insert into dados values (null, '2023-04-10 14:30:00', '1', 150000);
insert into dados values (null, '2023-04-10 15:00:00', '1', 150000);
insert into dados values (null, '2023-04-10 15:30:00', '0', 150000);
insert into dados values (null, '2023-04-10 16:00:00', '0', 150000);
insert into dados values (null, '2023-04-10 16:30:00', '0', 150000);
insert into dados values (null, '2023-04-10 17:00:00', '0', 150000);
insert into dados values (null, '2023-04-10 17:30:00', '1', 150000);
insert into dados values (null, '2023-04-10 18:00:00', '1', 150000);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150000);
insert into dados values (null, '2023-04-10 19:00:00', '1', 150000);

-- Dados referenter au sensor Numero 2
insert into dados values (null, '2023-04-10 07:00:00', '1', 150001);
insert into dados values (null, '2023-04-10 07:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 08:00:00', '0', 150001);
insert into dados values (null, '2023-04-10 08:30:00', '0', 150001);
insert into dados values (null, '2023-04-10 09:00:00', '0', 150001);
insert into dados values (null, '2023-04-10 09:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150001);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 11:00:00', '0', 150001);
insert into dados values (null, '2023-04-10 11:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 12:00:00', '1', 150001);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 13:00:00', '1', 150001);
insert into dados values (null, '2023-04-10 13:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150001);
insert into dados values (null, '2023-04-10 14:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 15:00:00', '1', 150001);
insert into dados values (null, '2023-04-10 15:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 16:00:00', '0', 150001);
insert into dados values (null, '2023-04-10 16:30:00', '0', 150001);
insert into dados values (null, '2023-04-10 17:00:00', '0', 150001);
insert into dados values (null, '2023-04-10 17:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 18:00:00', '1', 150001);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150001);
insert into dados values (null, '2023-04-10 19:00:00', '0', 150001);

-- Dados referenter au sensor Numero 3
insert into dados values (null, '2023-04-10 07:00:00', '1', 150002);
insert into dados values (null, '2023-04-10 07:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 08:00:00', '0', 150002);
insert into dados values (null, '2023-04-10 08:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 09:00:00', '0', 150002);
insert into dados values (null, '2023-04-10 09:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150002);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 11:00:00', '0', 150002);
insert into dados values (null, '2023-04-10 11:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 12:00:00', '1', 150002);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 13:00:00', '0', 150002);
insert into dados values (null, '2023-04-10 13:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150002);
insert into dados values (null, '2023-04-10 14:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 15:00:00', '0', 150002);
insert into dados values (null, '2023-04-10 15:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 16:00:00', '0', 150002);
insert into dados values (null, '2023-04-10 16:30:00', '0', 150002);
insert into dados values (null, '2023-04-10 17:00:00', '1', 150002);
insert into dados values (null, '2023-04-10 17:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 18:00:00', '1', 150002);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150002);
insert into dados values (null, '2023-04-10 19:00:00', '0', 150002);

-- Dados referenter au sensor Numero 4
insert into dados values (null, '2023-04-10 07:00:00', '1', 150003);
insert into dados values (null, '2023-04-10 07:30:00', '1', 150003);
insert into dados values (null, '2023-04-10 08:00:00', '0', 150003);
insert into dados values (null, '2023-04-10 08:30:00', '1', 150003);
insert into dados values (null, '2023-04-10 09:00:00', '0', 150003);
insert into dados values (null, '2023-04-10 09:30:00', '0', 150003);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150003);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150003);
insert into dados values (null, '2023-04-10 11:00:00', '0', 150003);
insert into dados values (null, '2023-04-10 11:30:00', '1', 150003);
insert into dados values (null, '2023-04-10 12:00:00', '0', 150003);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150003);
insert into dados values (null, '2023-04-10 13:00:00', '0', 150003);
insert into dados values (null, '2023-04-10 13:30:00', '1', 150003);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150003);
insert into dados values (null, '2023-04-10 14:30:00', '0', 150003);
insert into dados values (null, '2023-04-10 15:00:00', '0', 150003);
insert into dados values (null, '2023-04-10 15:30:00', '1', 150003);
insert into dados values (null, '2023-04-10 16:00:00', '0', 150003);
insert into dados values (null, '2023-04-10 16:30:00', '0', 150003);
insert into dados values (null, '2023-04-10 17:00:00', '1', 150003);
insert into dados values (null, '2023-04-10 17:30:00', '1', 150003);
insert into dados values (null, '2023-04-10 18:00:00', '0', 150003);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150003);
insert into dados values (null, '2023-04-10 19:00:00', '1', 150003);

-- Dados referenter au sensor Numero 5
insert into dados values (null, '2023-04-10 07:00:00', '1', 150004);
insert into dados values (null, '2023-04-10 07:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 08:00:00', '1', 150004);
insert into dados values (null, '2023-04-10 08:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 09:00:00', '1', 150004);
insert into dados values (null, '2023-04-10 09:30:00', '0', 150004);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150004);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 11:00:00', '0', 150004);
insert into dados values (null, '2023-04-10 11:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 12:00:00', '0', 150004);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 13:00:00', '0', 150004);
insert into dados values (null, '2023-04-10 13:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150004);
insert into dados values (null, '2023-04-10 14:30:00', '0', 150004);
insert into dados values (null, '2023-04-10 15:00:00', '0', 150004);
insert into dados values (null, '2023-04-10 15:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 16:00:00', '0', 150004);
insert into dados values (null, '2023-04-10 16:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 17:00:00', '1', 150004);
insert into dados values (null, '2023-04-10 17:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 18:00:00', '1', 150004);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150004);
insert into dados values (null, '2023-04-10 19:00:00', '1', 150004);

-- Dados referenter au sensor Numero 5
insert into dados values (null, '2023-04-10 07:00:00', '1', 150005);
insert into dados values (null, '2023-04-10 07:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 08:00:00', '1', 150005);
insert into dados values (null, '2023-04-10 08:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 09:00:00', '1', 150005);
insert into dados values (null, '2023-04-10 09:30:00', '0', 150005);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150005);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 11:00:00', '0', 150005);
insert into dados values (null, '2023-04-10 11:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 12:00:00', '0', 150005);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 13:00:00', '0', 150005);
insert into dados values (null, '2023-04-10 13:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150005);
insert into dados values (null, '2023-04-10 14:30:00', '0', 150005);
insert into dados values (null, '2023-04-10 15:00:00', '0', 150005);
insert into dados values (null, '2023-04-10 15:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 16:00:00', '0', 150005);
insert into dados values (null, '2023-04-10 16:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 17:00:00', '1', 150005);
insert into dados values (null, '2023-04-10 17:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 18:00:00', '1', 150005);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150005);
insert into dados values (null, '2023-04-10 19:00:00', '1', 150005);

-- Dados referenter au sensor Numero 7
insert into dados values (null, '2023-04-10 07:00:00', '0', 150006);
insert into dados values (null, '2023-04-10 07:30:00', '1', 150006);
insert into dados values (null, '2023-04-10 08:00:00', '1', 150006);
insert into dados values (null, '2023-04-10 08:30:00', '0', 150006);
insert into dados values (null, '2023-04-10 09:00:00', '1', 150006);
insert into dados values (null, '2023-04-10 09:30:00', '0', 150006);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150006);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150006);
insert into dados values (null, '2023-04-10 11:00:00', '0', 150006);
insert into dados values (null, '2023-04-10 11:30:00', '1', 150006);
insert into dados values (null, '2023-04-10 12:00:00', '1', 150006);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150006);
insert into dados values (null, '2023-04-10 13:00:00', '0', 150006);
insert into dados values (null, '2023-04-10 13:30:00', '0', 150006);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150006);
insert into dados values (null, '2023-04-10 14:30:00', '0', 150006);
insert into dados values (null, '2023-04-10 15:00:00', '0', 150006);
insert into dados values (null, '2023-04-10 15:30:00', '1', 150006);
insert into dados values (null, '2023-04-10 16:00:00', '0', 150006);
insert into dados values (null, '2023-04-10 16:30:00', '1', 150006);
insert into dados values (null, '2023-04-10 17:00:00', '1', 150006);
insert into dados values (null, '2023-04-10 17:30:00', '0', 150006);
insert into dados values (null, '2023-04-10 18:00:00', '0', 150006);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150006);
insert into dados values (null, '2023-04-10 19:00:00', '1', 150006);

-- Dados referenter au sensor Numero 8
insert into dados values (null, '2023-04-10 07:00:00', '0', 150007);
insert into dados values (null, '2023-04-10 07:30:00', '0', 150007);
insert into dados values (null, '2023-04-10 08:00:00', '1', 150007);
insert into dados values (null, '2023-04-10 08:30:00', '0', 150007);
insert into dados values (null, '2023-04-10 09:00:00', '1', 150007);
insert into dados values (null, '2023-04-10 09:30:00', '0', 150007);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150007);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150007);
insert into dados values (null, '2023-04-10 11:00:00', '0', 150007);
insert into dados values (null, '2023-04-10 11:30:00', '1', 150007);
insert into dados values (null, '2023-04-10 12:00:00', '1', 150007);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150007);
insert into dados values (null, '2023-04-10 13:00:00', '1', 150007);
insert into dados values (null, '2023-04-10 13:30:00', '0', 150007);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150007);
insert into dados values (null, '2023-04-10 14:30:00', '0', 150007);
insert into dados values (null, '2023-04-10 15:00:00', '0', 150007);
insert into dados values (null, '2023-04-10 15:30:00', '0', 150007);
insert into dados values (null, '2023-04-10 16:00:00', '1', 150007);
insert into dados values (null, '2023-04-10 16:30:00', '1', 150007);
insert into dados values (null, '2023-04-10 17:00:00', '1', 150007);
insert into dados values (null, '2023-04-10 17:30:00', '0', 150007);
insert into dados values (null, '2023-04-10 18:00:00', '0', 150007);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150007);
insert into dados values (null, '2023-04-10 19:00:00', '1', 150007);

-- Dados referenter au sensor Numero 9
insert into dados values (null, '2023-04-10 07:00:00', '1', 150008);
insert into dados values (null, '2023-04-10 07:30:00', '0', 150008);
insert into dados values (null, '2023-04-10 08:00:00', '1', 150008);
insert into dados values (null, '2023-04-10 08:30:00', '0', 150008);
insert into dados values (null, '2023-04-10 09:00:00', '0', 150008);
insert into dados values (null, '2023-04-10 09:30:00', '0', 150008);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150008);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150008);
insert into dados values (null, '2023-04-10 11:00:00', '1', 150008);
insert into dados values (null, '2023-04-10 11:30:00', '1', 150008);
insert into dados values (null, '2023-04-10 12:00:00', '1', 150008);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150008);
insert into dados values (null, '2023-04-10 13:00:00', '0', 150008);
insert into dados values (null, '2023-04-10 13:30:00', '0', 150008);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150008);
insert into dados values (null, '2023-04-10 14:30:00', '0', 150008);
insert into dados values (null, '2023-04-10 15:00:00', '0', 150008);
insert into dados values (null, '2023-04-10 15:30:00', '1', 150008);
insert into dados values (null, '2023-04-10 16:00:00', '1', 150008);
insert into dados values (null, '2023-04-10 16:30:00', '1', 150008);
insert into dados values (null, '2023-04-10 17:00:00', '1', 150008);
insert into dados values (null, '2023-04-10 17:30:00', '0', 150008);
insert into dados values (null, '2023-04-10 18:00:00', '0', 150008);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150008);
insert into dados values (null, '2023-04-10 19:00:00', '1', 150008);

-- Dados referenter au sensor Numero 10
insert into dados values (null, '2023-04-10 07:00:00', '1', 150009);
insert into dados values (null, '2023-04-10 07:30:00', '0', 150009);
insert into dados values (null, '2023-04-10 08:00:00', '1', 150009);
insert into dados values (null, '2023-04-10 08:30:00', '0', 150009);
insert into dados values (null, '2023-04-10 09:00:00', '0', 150009);
insert into dados values (null, '2023-04-10 09:30:00', '0', 150009);
insert into dados values (null, '2023-04-10 10:00:00', '1', 150009);
insert into dados values (null, '2023-04-10 10:30:00', '1', 150009);
insert into dados values (null, '2023-04-10 11:00:00', '0', 150009);
insert into dados values (null, '2023-04-10 11:30:00', '0', 150009);
insert into dados values (null, '2023-04-10 12:00:00', '1', 150009);
insert into dados values (null, '2023-04-10 12:30:00', '1', 150009);
insert into dados values (null, '2023-04-10 13:00:00', '0', 150009);
insert into dados values (null, '2023-04-10 13:30:00', '0', 150009);
insert into dados values (null, '2023-04-10 14:00:00', '1', 150009);
insert into dados values (null, '2023-04-10 14:30:00', '0', 150009);
insert into dados values (null, '2023-04-10 15:00:00', '1', 150009);
insert into dados values (null, '2023-04-10 15:30:00', '1', 150009);
insert into dados values (null, '2023-04-10 16:00:00', '1', 150009);
insert into dados values (null, '2023-04-10 16:30:00', '1', 150009);
insert into dados values (null, '2023-04-10 17:00:00', '1', 150009);
insert into dados values (null, '2023-04-10 17:30:00', '1', 150009);
insert into dados values (null, '2023-04-10 18:00:00', '0', 150009);
insert into dados values (null, '2023-04-10 18:30:00', '1', 150009);
insert into dados values (null, '2023-04-10 19:00:00', '0', 150009);
select * from dados where fkSensor=150009;