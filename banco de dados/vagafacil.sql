create database VagaFacil;
use VagaFacil;


-- Criação da  tabela empresa 
create table empresa (
		idEmpresa int primary key auto_increment,
        razao varchar(45),
        cnpj char(18)        
);

-- Dados referentes as empresas
insert into empresa values (null,'coca-cola','45.997.418/0001-53'),
						   (null,'itaú','60.701.190/0001-04'),
                           (null,'burguer-king','13.574.594/0001-96'),
                           (null,'ford','03.470.727/0001-20'),
                           (null,'carrefour','45.543.915/0001-81'), 
                           (null,'continental','48.754.139/0001-57');

-- Criação tabela bairro
create table bairro(
		idBairro int primary key auto_increment,
		nome varchar(45),
		regiao varchar(10),
		area decimal(7,2)
);

-- Inserindo dados na tebela bairro
INSERT INTO bairro VALUES (null, 'Água Rasa', 'Leste', 715.05), (null, 'Alto de Pinheiros', 'Oeste', 751.27), (null, 'Anhanguera', 'Oeste', 3339.95), (null, 'Aricanduva', 'Leste', 686.27),
                          (null, 'Artur Alvim', 'Leste', 653.04), (null, 'Barra Funda', 'Centro', 589.81), (null, 'Bela Vista', 'Centro', 276.71), (null, 'Belém', 'Leste', 613.55),
                          (null, 'Bom Retiro', 'Centro', 427.39), (null, 'Brás', 'Centro', 364.61), (null, 'Brasilândia', 'Oeste', 2106.12), (null, 'Butantã', 'Oeste', 1291.72),
                          (null, 'Cachoeirinha', 'Oeste', 1358.87), (null, 'Cambuci', 'Sul', 394.18), (null, 'Campo Belo', 'Sul', 886.26), (null, 'Campo Grande', 'Sul', 1302.09),
                          (null, 'Campo Limpo', 'Sul', 1260.86), (null, 'Cangaíba', 'Leste', 1379.12), (null, 'Capão Redondo', 'Sul', 1382.30), (null, 'Carrão', 'Leste', 780.32),
                          (null, 'Casa Verde', 'Norte', 717.22), (null, 'Cidade Ademar', 'Sul', 1226.23), (null, 'Cidade Dutra', 'Sul', 2778.57), (null, 'Cidade Líder', 'Leste', 1058.20),
                          (null, 'Cidade Tiradentes', 'Leste', 1494.89), (null, 'Consolação', 'Centro', 379.52), (null, 'Cursino', 'Sul', 1207.65), (null, 'Ermelino Matarazzo', 'Leste', 943.48),
                          (null, 'Freguesia do Ó', 'Oeste', 1106.34), (null, 'Grajaú', 'Sul', 9278.51), (null, 'Guaianases', 'Sul', 891.16), (null, 'Iguatemi', 'Leste', 1957.99),
                          (null, 'Ipiranga', 'Sul', 1105.16), (null, 'Itaim Bibi', 'Sul', 1005.35), (null, 'Itaim Paulista', 'Leste', 1224.54), (null, 'Itaquera', 'Leste', 1473.24),
                          (null, 'Jabaquara', 'Sul', 1407.80), (null, 'Jaçanã', 'Norte', 750.72), (null, 'Jaguara', 'Norte', 454.34), (null, 'Jaguaré', 'Oeste', 656.82),
                          (null, 'Jaraguá', 'Oeste', 2820.14), (null, 'Jardim Ângela', 'Sul', 3682.12), (null, 'Jardim Helena', 'Leste', 915.44), (null, 'Jardim Paulista', 'Sul', 626.66),
                          (null, 'Jardim São Luís', 'Sul', 2596.99), (null, 'José Bonifácio', 'Leste', 1445.00), (null, 'Lajeado', 'Leste', 892.28), (null, 'Lapa', 'Oeste', 1029.95),
                          (null, 'Liberdade', 'Centro', 364.40), (null, 'Limão', 'Oeste', 642.49), (null, 'Mandaqui', 'Norte', 1323.30), (null, 'Marsilac', 'Sul', 20795.96),
                          (null, 'Moema', 'Sul', 912.62), (null, 'Mooca', 'Sul', 794.86), (null, 'Morumbi', 'Sul', 1148.85), (null, 'Parelheiros', 'Sul', 15179.77),
                          (null, 'Pari', 'Centro', 272.62), (null, 'Parque do Carmo', 'Leste', 1560.72), (null, 'Pedreira', 'Sul', 1851.35), (null, 'Penha', 'Leste', 1145.67),
                          (null, 'Perdizes', 'Oeste', 633.05), (null, 'Perus', 'Oeste', 2369.13), (null, 'Pinheiros', 'Oeste', 828.89), (null, 'Pirituba', 'Oeste', 1709.14),
                          (null, 'Ponte Rasa', 'Leste', 656.99), (null, 'Raposo Tavares', 'Oeste', 1219.19), (null, 'República', 'Centro', 232.99), (null, 'Rio Pequeno', 'Oeste', 977.81),
                          (null, 'Sacomã', 'Sul', 1464.39), (null, 'Santa Cecília', 'Centro', 371.02), (null, 'Santana', 'Norte', 1313.21), (null, 'Santo Amaro', 'Sul', 1597.39),
                          (null, 'São Domingos', 'Oeste', 993.73), (null, 'São Lucas', 'Leste', 968.71), (null, 'São Mateus', 'Leste', 1279.01), (null, 'São Miguel', 'Leste', 867.85),
                          (null, 'São Rafael', 'Leste', 1303.03), (null, 'Sapopemba', 'Leste', 1364.89), (null, 'Saúde', 'Sul', 925.83), (null, 'Sé', 'Centro', 218.49),
                          (null, 'Socorro', 'Sul', 1228.92), (null, 'Tatuapé', 'Leste', 850.78), (null, 'Tremembé', 'Norte', 5782.64), (null, 'Tucuruvi', 'Norte', 946.97),
                          (null, 'Vila Andrade', 'Sul', 1032.63), (null, 'Vila Curuçá', 'Leste', 952.36), (null, 'Vila Formosa', 'Leste', 751.52), (null, 'Vila Guilherme', 'Leste', 724.79),
                          (null, 'Vila Jacuí', 'Leste', 823.01), (null, 'Vila Leopoldina', 'Oeste', 700.48), (null, 'Vila Maria', 'Norte', 1181.71), (null, 'Vila Mariana', 'Sul', 854.26),
                          (null, 'Vila Matilde', 'Leste', 891.87), (null, 'Vila Medeiros', 'Norte', 789.39), (null, 'Vila Prudente', 'Leste', 960.19), (null, 'Vila Sônia', 'Sul', 1008.97);


-- criação da tabela endereco e inserção de valores 
create table endereco (
		idEndereco int primary key auto_increment,
        logradouro varchar(45), 
        fkBairro int,
        foreign key (fkBairro) references bairro(idBairro)
)auto_increment = 150000;
SELECT * FROM endereco;
-- Dados referentes as ruas
insert into endereco values (null, 'Rua Antonio Bento',  44),
					   (null, 'Rua Consolação', 26),
                       (null, 'Avenida Doutor Luís Rocha Miranda', 37),
                       (null, 'Rua dos Pinheiros', 63),
                       (null, 'Alameda Itupiranga', 79);

-- Criação tabela Filial
create table filial (
		idFilial int primary key auto_increment,
        numero int,
        cep char(9),
        complemento varchar(45),
        fkEmpresa int,
        foreign key (fkEmpresa) references empresa(idEmpresa),
        fkEndereco int,
        foreign key (fkEndereco) references endereco(idEndereco)
)auto_increment = 50000;

desc filial;
-- Dados referentes as filiais
insert into filial values (50000, 105, '01432-000', 'Chácara Santo Antônio (Zona Sul)',1,150000);
insert into filial values (50001, 100, '01416-003', 'Jabaquara, São Paulo)',2, 150001);
-- insert into filial values (50002, 213, '04344-010', 'Vila Tramontano, São Paulo - SP',3, 15000);
-- insert into filial values (50003, 131, '05422-000', 'Vila Endres, Guarulhos - SP',4, 15003);

-- Criação do Funcionário
create table funcionario (
		idFuncionario int primary key auto_increment,
        nome varchar(50),
        cargo varchar(45),
        email varchar(100),
        senha varchar(18),
        telefone char(14),
        cpf char(14),
        dataNascimento date,
        fkSuperior int,
        foreign key (fkSuperior) references funcionario(idFuncionario),
        foto varchar(300)
)auto_increment = 100000;

-- Dados referentes aos usuarios
insert into funcionario values (null,'Fernando Brandão', 'CEO','fernando@gmail.com','fernando123','(11)91234-4321','123.456.897-51','1960-09-08',null,'usuarioPadrao.png'),
                           (null,'Bruno Lima', 'Desenvolvedor','bruno@gmail.com','bruno123','(11)93456-6543','456.987.321-56','2005-10-25',100000,'usuarioPadrao.png'),
                           (null,'Daniel Yuzo', 'Desenvolvedor','daniel@gmail.com','daniel123','(11)94567-7654','456.987.321-56','2005-10-25',100000,'usuarioPadrao.png'),
						   (null,'Gabriel Branco', 'Desenvolvedor','gabriel@gmail.com','gabriel123','(11)95678-8765','598.621.789-56','2003-03-24',100000,'usuarioPadrao.png'),
						   (null,'Henrique Bechis','Desenvolvedor','henrique@gmail.com','henrique123','(11)96789-9876','564.189.654-87','1997-04-24',100000,'usuarioPadrao.png'),
                           (null,'Lucas Neves', 'Desenvolvedor','lucas@gmail.com','lucas123','(11)97890-0987','456.987.652-30','1975-08-1',100000,'usuarioPadrao.png');
                           


-- Tabela Filial e Funcionários (muitos para muitos)
create table FilialFuncionario (
fkFilial int,
foreign key (fkFilial) references filial(idFilial),
fkFuncionario int,
foreign key (fkFuncionario) references funcionario(idFuncionario) ON DELETE CASCADE, 
Primary key (fkFilial, fkFuncionario)
);


-- Inserir valores na tabela filiaFuncionario
insert into FilialFuncionario values (50000,100000),
									 (50001,100001),
									 (50001,100002),
									 (50001,100003),
									 (50001,100004),
									 (50001,100005);




create table bairroPopulacao(
		idBairro int primary key,
        foreign key(idBairro) references bairro(idBairro),
        populacao int,
        empregos int,
        fluxo int
);

INSERT INTO bairroPopulacao VALUES (1, 60.7314, 116.3513, 228.1379), (2, 47.3425, 55.2105, 159.1332), (3, 6.1513, 24.2061, 24.6159), (4, 44.5816, 126.1603, 204.6367),
                                   (9, 155.8764, 88.7199, 398.6359), (10, 217.3171, 88.5768, 568.5170), (11, 24.9592, 132.0713, 181.2784), (12, 49.6586, 41.7939, 176.9168),
                                   (5, 45.1060, 155.2968, 306.0149), (6, 148.1443, 26.6170, 450.1212), (7, 521.3436, 262.1409, 1399.9675), (8, 105.7599, 78.8852, 311.1825),
                                   (13, 29.0881, 107.1479, 190.5289), (14, 102.8413, 101.4054, 332.6932), (15, 74.1171, 72.4776, 223.2483), (16, 56.9300, 81.1081, 207.3513),
                                   (17, 44.5831, 178.5868, 275.0258), (18, 30.4839, 99.8390, 161.3877), (19, 56.9153, 209.9906, 361.7109), (20, 53.5191, 108.5593, 232.2573),
                                   (21, 61.8471, 119.9200, 274.8794), (22, 53.6555, 229.8044, 355.5353), (23, 20.7661, 72.4304, 132.6017), (24, 43.1639, 126.0641, 232.4844),
                                   (25, 30.6678, 153.8494, 244.4461), (26, 281.9693, 151.3491, 881.3238), (27, 44.0757, 93.4600, 166.5665), (28, 28.7913, 124.7605, 214.4243),
                                   (29, 40.0320, 127.1038, 253.2332), (30, 7.9827, 41.3287, 63.8121), (31, 27.6123, 121.5147, 170.1894), (32, 17.6053, 73.9396, 111.8596),
                                   (33, 86.4065, 100.5691, 319.0045), (34, 258.7666, 95.9636, 592.4852), (35, 44.2444, 189.7317, 308.2047), (36, 41.9762, 142.5314, 254.8112),
                                   (37, 77.6005, 162.0585, 374.4168), (38, 41.1818, 127.5855, 220.4164), (39, 40.4367, 53.1628, 126.7223), (40, 56.2742, 82.3376, 188.7412),
                                   (41, 16.0201, 73.4010, 109.8414), (42, 18.9301, 89.3121, 127.0418), (43, 32.5865, 147.5203, 236.2285), (44, 291.3095, 144.2920, 716.1124),
                                   (45, 30.9593, 110.9508, 181.6045), (46, 22.6028, 92.8000, 157.5176), (47, 35.5494, 192.9170, 265.7249), (48, 91.2103, 65.0993, 290.9801),
                                   (49, 170.6367, 197.9473, 798.0488), (50, 66.0897, 123.8229, 291.6870), (51, 24.5462, 82.3744, 139.0153), (52, 0.1051, 0.4021, 0.4872),
                                   (53, 134.5193, 96.8716, 387.8350), (54, 94.6280, 100.1170, 337.9614), (55, 47.9488, 45.0790, 133.4447), (56, 1.8753, 9.7864, 14.7909),
                                   (57, 116.2130, 68.6413, 294.6776), (58, 18.7952, 45.4944, 84.9300), (59, 21.8235, 84.9548, 136.3054), (60, 48.0994, 112.5673, 240.5230),
                                   (61, 110.6785, 180.4818, 474.5581), (62, 5.8963, 36.8262, 47.2237), (63, 207.5897, 79.4774, 510.9182), (64, 30.1356, 99.7981, 160.0834),
                                   (65, 37.8423, 137.9093, 202.6835), (66, 28.7494, 86.8396, 152.9097), (67, 645.5771, 261.9597, 1608.6098), (68, 36.6247, 125.4293, 202.3583),
                                   (69, 44.8152, 177.8283, 330.7309), (70, 237.0384, 236.4643, 696.3236), (71, 75.6193, 87.0561, 307.2974), (72, 111.2283, 46.3882, 358.3120),
                                   (73, 31.8105, 86.6181, 142.5568), (74, 34.6936, 147.5715, 202.9813), (75, 42.4148, 121.3149, 223.9162), (76, 46.1324, 103.2425, 233.0576),
                                   (77, 31.4367, 119.9013, 158.4484), (78, 48.6068, 211.5035, 307.5032), (79, 88.7874, 144.3926, 394.2268), (80, 651.0733, 119.3968, 1652.0939),
                                   (81, 27.7260, 29.6162, 97.7509), (82, 128.1565, 111.9890, 468.7663), (83, 9.0780, 37.6918, 63.0143), (84, 44.8800, 102.3454, 233.5681),
                                   (85, 54.4454, 151.1635, 273.1424), (86, 29.4951, 159.9154, 246.9045), (87, 54.6319, 125.5216, 274.1085), (88, 58.1658, 78.0254, 221.8836),
                                   (89, 37.5500, 176.1157, 280.0719), (90, 99.1791, 62.9397, 249.1220), (91, 53.9269, 96.3104, 206.6734), (92, 210.1210, 154.5068, 640.2571),
                                   (93, 48.1898, 118.3076, 220.8573), (94, 47.0376, 157.8814, 223.2901), (95, 52.1688, 108.9816, 258.3770), (96, 56.4883, 118.0095, 236.7365);

create table bairroIdade(
		idBairro int primary key,
        foreign key(idBairro) references bairro(idBairro),
        adolescente int,
        jovemAdulto int,
        adulto int,
        idoso int
);

INSERT INTO bairroIdade VALUES (1, 7.6456, 18.7497, 50.0818, 27.0792), (2, 3.5726, 7.7948, 22.8333, 16.4708), (3, 2.2452, 6.1603, 10.4052, 1.8479), (4, 10.8339, 21.4158, 54.6199, 22.4343),
                               (5, 12.0238, 27.9585, 65.2043, 28.9584), (6, 2.5618, 3.7368, 10.8611, 6.7123), (7, 11.7524, 37.3423, 135.9402, 48.2816), (8, 5.5676, 11.6893, 34.2319, 14.2710),
                               (9, 8.0442, 16.3574, 38.4122, 13.2666), (10, 5.6855, 16.5327, 40.0976, 11.4177), (11, 16.1373, 28.2121, 52.3417, 14.7978), (12, 2.8729, 5.9928, 19.8433, 8.8564),
                               (13, 10.6500, 20.7533, 43.9549, 13.7953), (14, 8.3388, 15.2747, 44.8171, 19.8970), (15, 5.3856, 9.7951, 31.6262, 18.4009), (16, 7.4941, 13.4945, 33.8947, 17.7983),
                               (17, 17.6959, 36.5362, 73.5847, 23.9606), (18, 8.4322, 20.4246, 43.9577, 13.4223), (19, 20.0875, 44.8130, 86.2859, 24.3948), (20, 7.3636, 17.6146, 49.4079, 21.4527),
                               (21, 10.6285, 19.1434, 53.1315, 20.9573), (22, 21.5898, 46.9643, 96.3579, 29.3999), (23, 6.5030, 14.7288, 28.9124, 11.6445), (24, 8.6430, 26.4184, 51.9316, 18.8707),
                               (25, 20.3159, 33.4834, 60.5376, 14.9322), (26, 5.0696, 23.9223, 77.4689, 33.1550), (27, 7.7721, 15.0118, 40.0447, 20.0331), (28, 10.8609, 25.1887, 50.1929, 19.1302),
                               (29, 10.4706, 22.9125, 56.9201, 20.9935), (30, 4.8744, 9.1427, 16.5000, 4.2579), (31, 12.1617, 27.1466, 47.2799, 14.8391), (32, 7.6579, 16.6778, 29.2953, 7.3438),
                               (33, 7.4777, 16.7460, 43.7937, 20.4667), (34, 5.1743, 11.1305, 47.3278, 22.1495), (35, 23.5460, 41.5413, 76.0457, 21.2872), (36, 14.0866, 28.2520, 56.8081, 21.5505),
                               (37, 12.8960, 28.6028, 74.3827, 23.6369), (38, 12.2456, 24.4086, 53.7497, 19.4040), (39, 3.5106, 9.0021, 21.9615, 11.9712), (40, 6.4934, 15.9069, 33.9758, 14.2368),
                               (41, 8.1563, 16.0106, 29.8673, 8.5872), (42, 11.3177, 18.7308, 36.7935, 7.5212), (43, 15.7323, 33.2419, 57.2195, 17.4648), (44, 5.8852, 17.4768, 69.0630, 37.9472),
                               (45, 11.8922, 22.3401, 47.0279, 13.1402), (46, 8.3273, 19.4782, 40.0145, 12.3349), (47, 24.3892, 44.0826, 73.9757, 21.7667), (48, 3.9759, 8.9868, 29.4247, 15.8571),
                               (49, 13.7431, 30.2003, 93.1778, 41.0950), (50, 12.4967, 20.8097, 52.5689, 20.8034), (51, 5.2082, 14.9528, 36.4929, 15.2006), (52, 0.0511, 0.0802, 0.1200, 0.0858),
                               (53, 5.1719, 12.2559, 46.3829, 23.5914), (54, 7.1031, 15.7160, 41.7809, 24.9402), (55, 3.7995, 7.4448, 19.0086, 8.9707), (56, 1.4459, 2.0145, 3.7454, 1.0024),
                               (57, 5.4508, 12.6256, 28.2775, 11.2428), (58, 4.6908, 9.2496, 19.7672, 5.0893), (59, 10.3314, 17.6990, 37.3797, 7.4313), (60, 9.4914, 18.3281, 48.3499, 22.8408),
                               (61, 8.1573, 24.8906, 85.1544, 42.7928), (62, 5.4839, 7.0811, 13.9950, 4.6937), (63, 5.1587, 9.2799, 37.3548, 20.7362), (64, 11.0594, 18.2729, 41.9006, 17.8101),
                               (65, 14.9637, 24.5118, 58.2596, 24.3641), (66, 9.6679, 16.4470, 35.8599, 11.9309), (67, 16.7818, 37.1776, 126.6192, 53.9079), (68, 11.5125, 22.4880, 53.5022, 19.2307),
                               (69, 17.9221, 32.2967, 76.4209, 28.6761), (70, 14.8294, 33.4780, 109.9509, 52.5066), (71, 5.2185, 13.5873, 37.7952, 21.4771), (72, 3.2954, 6.6452, 20.2580, 11.6014),
                               (73, 7.1257, 15.9299, 36.6589, 15.2094), (74, 13.1402, 24.9455, 60.5733, 31.5409), (75, 13.8130, 22.6746, 50.1208, 18.0859), (76, 8.6017, 19.7477, 42.7205, 14.2813),
                               (77, 14.9022, 27.9149, 47.0158, 14.8469), (78, 23.6034, 42.3404, 89.0108, 28.1862), (79, 11.3606, 18.0962, 63.7558, 38.4358), (80, 8.3894, 21.2916, 52.4830, 17.4791),
                               (81, 2.2630, 4.6984, 12.1318, 7.3561), (82, 6.5845, 18.8145, 51.2365, 24.1813), (83, 3.3568, 7.9009, 15.2190, 5.3419), (84, 7.8841, 15.8168, 44.0964, 23.9353),
                               (85, 13.0763, 32.9789, 66.6076, 14.5338), (86, 17.5186, 33.5451, 63.1274, 21.3732), (87, 10.9165, 21.0334, 51.5036, 28.3785), (88, 9.7297, 11.0929, 30.9248, 18.1294),
                               (89, 20.3703, 34.9826, 75.5216, 19.5028), (90, 3.8188, 9.8989, 30.6290, 10.3415), (91, 8.3548, 19.0639, 40.9144, 13.9484), (92, 7.3057, 20.4750, 71.6749, 39.9024),
                               (93, 7.3576, 22.1759, 50.2001, 23.2545), (94, 13.0151, 29.2150, 64.7145, 29.1504), (95, 9.0503, 16.8519, 49.7454, 20.3876), (96, 8.4799, 20.9580, 51.4376, 19.2285);

create table bairroRenda(
		idBairro int primary key,
        foreign key(idBairro) references bairro(idBairro),
        baixa int,
        media int,
        alta int
);

INSERT INTO bairroRenda VALUES (1, 57.1932, 47.0499, 12.1096), (2, 8.9715, 19.5083, 26.7294), (3, 17.0712, 6.5049, 0.6302), (4, 81.8963, 38.2211, 6.0428),
                               (5, 105.6627, 48.1762, 1.4578), (6, 8.5044, 10.2118, 7.8992), (7, 86.2817, 126.1465, 49.7127), (8, 43.7177, 25.4584, 9.7074),
                               (9, 49.7719, 35.2044, 3.7413), (10, 69.9158, 17.3720, 1.2945), (11, 104.5439, 23.2584, 4.2695), (12, 11.6906, 19.7938, 10.3095),
                               (13, 73.2049, 28.6812, 5.2610), (14, 42.9423, 39.6824, 18.7782), (15, 17.0808, 31.3915, 24.0054), (16, 27.0527, 37.0174, 17.0380),
                               (17, 118.0107, 54.5913, 5.9840), (18, 74.8398, 22.3447, 2.6553), (19, 166.9753, 34.4057, 8.6096), (20, 69.5791, 27.0363, 11.9438),
                               (21, 64.6413, 44.1204, 11.1584), (22, 180.6839, 42.0639, 7.0574), (23, 49.3466, 18.4627, 4.6207), (24, 79.9594, 37.4542, 8.6515),
                               (25, 123.5088, 29.9714, 0.3693), (26, 37.9716, 59.2960, 54.0841), (27, 54.7062, 27.0542, 11.6979), (28, 86.4226, 29.6095, 8.7283),
                               (29, 78.6413, 42.8856, 5.5751), (30, 33.3935, 7.0118, 0.9236), (31, 88.7966, 32.7180, 0.0000), (32, 53.9293, 16.4255, 3.5838),
                               (33, 49.2417, 37.1087, 14.2188), (34, 10.9992, 48.3891, 36.5763), (35, 163.7121, 25.4651, 0.5537), (36, 106.2088, 28.5724, 7.7509),
                               (37, 79.1867, 61.9065, 20.9639), (38, 82.4635, 40.8528, 4.2692), (39, 30.4904, 21.1648, 1.5077), (40, 48.1319, 24.2639, 9.9418),
                               (41, 60.4495, 11.7852, 1.1663), (42, 73.9444, 14.3170, 1.0510), (43, 107.7165, 32.8334, 6.9682), (44, 18.0880, 59.2395, 66.9614),
                               (45, 90.8101, 18.6836, 1.4575), (46, 75.5038, 16.6401, 0.6554), (47, 172.3091, 20.1484, 0.4584), (48, 16.9688, 25.2342, 22.8992),
                               (49, 75.6476, 69.5774, 52.7250), (50, 79.0596, 36.0364, 8.7254), (51, 38.6617, 22.1280, 21.5847), (52, 0.3193, 0.0545, 0.0283),
                               (53, 10.6496, 38.5133, 47.7099), (54, 27.2564, 59.3010, 13.5621), (55, 11.4880, 19.6597, 13.9296), (56, 8.4129, 1.0311, 0.3424),
                               (57, 49.0830, 11.9544, 7.6040), (58, 30.6269, 10.6066, 4.2615), (59, 63.3964, 19.0493, 2.5090), (60, 69.1325, 30.2277, 13.2080),
                               (61, 25.4593, 62.1341, 92.8884), (62, 30.6750, 5.2171, 0.9345), (63, 17.1024, 30.2501, 32.1261), (64, 52.6861, 41.0066, 6.1054),
                               (65, 82.1595, 45.1072, 10.6394), (66, 62.3553, 20.6104, 3.8739), (67, 165.9556, 66.6981, 29.3103), (68, 85.2528, 30.0069, 10.1676),
                               (69, 107.5472, 60.6020, 9.6784), (70, 113.6165, 81.2786, 41.5692), (71, 28.2796, 33.4486, 25.3265), (72, 9.2595, 17.8516, 19.2752),
                               (73, 54.4363, 22.1589, 10.0228), (74, 112.7468, 33.2979, 1.5278), (75, 77.1612, 39.4289, 4.7247), (76, 79.4135, 19.5875, 4.2415),
                               (77, 104.8947, 11.4786, 3.5287), (78, 165.9145, 44.9472, 0.6411), (79, 40.1370, 62.7891, 41.4644), (80, 83.0976, 29.0585, 7.2406),
                               (81, 13.8072, 12.1473, 3.6618), (82, 35.2300, 53.8917, 22.8696), (83, 30.9066, 5.1990, 1.5856), (84, 46.2021, 35.3644, 20.7778),
                               (85, 77.6851, 27.5404, 45.9390), (86, 127.7584, 25.6762, 6.4797), (87, 63.9730, 43.9083, 17.6389), (88, 31.4822, 30.1136, 16.4282),
                               (89, 146.1914, 25.2075, 4.7168), (90, 15.2567, 19.8849, 27.7995), (91, 70.6696, 16.3737, 9.2671), (92, 32.3848, 66.7291, 55.3953),
                               (93, 79.2010, 31.5674, 7.5392), (94, 93.5469, 48.7579, 15.5779), (95, 66.1859, 33.8683, 8.9264), (96, 54.4991, 32.0654, 31.4439);

SELECT * FROM funcionario;

create table sensor(
		idSensor int primary key auto_increment,
		fkEndereco int,
        foreign key (fkEndereco) references endereco(idEndereco),
		numRua varchar(45),
		numSensor varchar(45)
)auto_increment=200000;

-- Dados referentes aos sensores
insert into sensor values (null, 150000, '202', '1'),
						  (null, 150001, '307', '2'),
                          (null, 150002, '472', '3'),
                          (null, 150003, '532', '4'),
                          (null, 150004, '298', '5'),
                          (null, 150002, '397', '6'),
                          (null, 150003, '485', '7'),
                          (null, 150000, '604', '8'),
                          (null, 150002, '200', '9'),
                          (null, 150002, '578', '10');

create table dados(
		idDados int primary key auto_increment,
		dataHora datetime,
		valor char(1),
		fkSensor int,
		foreign key(fksensor) references sensor(idSensor)
)auto_increment=250000;
USE vagaFacil;
-- Dados referenter aos dados do sensor
insert into dados values (null, '2023-04-10 07:00:00', '0', 200000), (null, '2023-04-10 07:30:00', '0', 200000), (null, '2023-04-10 08:00:00', '0', 200000), (null, '2023-04-10 08:30:00', '1', 200000),
                         (null, '2023-04-10 09:00:00', '0', 200000), (null, '2023-04-10 09:30:00', '1', 200000), (null, '2023-04-10 10:00:00', '1', 200000), (null, '2023-04-10 10:30:00', '1', 200000),
                         (null, '2023-04-10 11:00:00', '0', 200000), (null, '2023-04-10 11:30:00', '0', 200000), (null, '2023-04-10 12:00:00', '1', 200000), (null, '2023-04-10 12:30:00', '1', 200000),
                         (null, '2023-04-10 13:00:00', '0', 200000), (null, '2023-04-10 13:30:00', '1', 200000), (null, '2023-04-10 14:00:00', '1', 200000), (null, '2023-04-10 14:30:00', '1', 200000),
                         (null, '2023-04-10 15:00:00', '0', 200000), (null, '2023-04-10 15:30:00', '0', 200000), (null, '2023-04-10 16:00:00', '0', 200000), (null, '2023-04-10 16:30:00', '0', 200000),
                         (null, '2023-04-10 17:00:00', '0', 200000), (null, '2023-04-10 17:30:00', '1', 200000), (null, '2023-04-10 18:00:00', '1', 200000), (null, '2023-04-10 18:30:00', '1', 200000),
                         (null, '2023-04-10 19:00:00', '0', 200000), (null, '2023-04-10 07:00:00', '1', 200001), (null, '2023-04-10 07:30:00', '1', 200001), (null, '2023-04-10 08:00:00', '0', 200001),
                         (null, '2023-04-10 08:30:00', '0', 200001), (null, '2023-04-10 09:00:00', '0', 200001), (null, '2023-04-10 09:30:00', '1', 200001), (null, '2023-04-10 10:00:00', '1', 200001),
                         (null, '2023-04-10 10:30:00', '1', 200001), (null, '2023-04-10 11:00:00', '0', 200001), (null, '2023-04-10 11:30:00', '1', 200001), (null, '2023-04-10 12:00:00', '1', 200001),
                         (null, '2023-04-10 12:30:00', '1', 200001), (null, '2023-04-10 13:00:00', '1', 200001), (null, '2023-04-10 13:30:00', '1', 200001), (null, '2023-04-10 14:00:00', '1', 200001),
                         (null, '2023-04-10 14:30:00', '0', 200001), (null, '2023-04-10 15:00:00', '1', 200001), (null, '2023-04-10 15:30:00', '1', 200001), (null, '2023-04-10 16:00:00', '0', 200001), 
                         (null, '2023-04-10 16:30:00', '0', 200001), (null, '2023-04-10 17:00:00', '0', 200001), (null, '2023-04-10 17:30:00', '1', 200001), (null, '2023-04-10 18:00:00', '1', 200001),
                         (null, '2023-04-10 18:30:00', '0', 200001), (null, '2023-04-10 19:00:00', '0', 200001), (null, '2023-04-10 07:00:00', '1', 200002), (null, '2023-04-10 07:30:00', '1', 200002),
                         (null, '2023-04-10 08:00:00', '0', 200002), (null, '2023-04-10 08:30:00', '1', 200002), (null, '2023-04-10 09:00:00', '0', 200002), (null, '2023-04-10 09:30:00', '1', 200002), 
                         (null, '2023-04-10 10:00:00', '1', 200002), (null, '2023-04-10 10:30:00', '1', 200002), (null, '2023-04-10 11:00:00', '0', 200002), (null, '2023-04-10 11:30:00', '1', 200002),
                         (null, '2023-04-10 12:00:00', '0', 200002), (null, '2023-04-10 12:30:00', '1', 200002), (null, '2023-04-10 13:00:00', '0', 200002), (null, '2023-04-10 13:30:00', '1', 200002),
                         (null, '2023-04-10 14:00:00', '1', 200002), (null, '2023-04-10 14:30:00', '1', 200002), (null, '2023-04-10 15:00:00', '0', 200002), (null, '2023-04-10 15:30:00', '1', 200002),
                         (null, '2023-04-10 16:00:00', '0', 200002), (null, '2023-04-10 16:30:00', '0', 200002), (null, '2023-04-10 17:00:00', '1', 200002), (null, '2023-04-10 17:30:00', '1', 200002),
                         (null, '2023-04-10 18:00:00', '1', 200002), (null, '2023-04-10 18:30:00', '1', 200002), (null, '2023-04-10 19:00:00', '0', 200002), (null, '2023-04-10 07:00:00', '1', 200003),
						 (null, '2023-04-10 07:30:00', '1', 200003), (null, '2023-04-10 08:00:00', '0', 200003), (null, '2023-04-10 08:30:00', '1', 200003), (null, '2023-04-10 09:00:00', '0', 200003),
                         (null, '2023-04-10 09:30:00', '1', 200003), (null, '2023-04-10 10:00:00', '1', 200003), (null, '2023-04-10 10:30:00', '1', 200003), (null, '2023-04-10 11:00:00', '0', 200003),
                         (null, '2023-04-10 11:30:00', '1', 200003), (null, '2023-04-10 12:00:00', '0', 200003), (null, '2023-04-10 12:30:00', '1', 200003), (null, '2023-04-10 13:00:00', '0', 200003),
                         (null, '2023-04-10 13:30:00', '1', 200003), (null, '2023-04-10 14:00:00', '1', 200003), (null, '2023-04-10 14:30:00', '0', 200003), (null, '2023-04-10 15:00:00', '0', 200003),
                         (null, '2023-04-10 15:30:00', '0', 200003), (null, '2023-04-10 16:00:00', '0', 200003), (null, '2023-04-10 16:30:00', '0', 200003), (null, '2023-04-10 17:00:00', '1', 200003),
                         (null, '2023-04-10 17:30:00', '0', 200003), (null, '2023-04-10 18:00:00', '0', 200003), (null, '2023-04-10 18:30:00', '1', 200003), (null, '2023-04-10 19:00:00', '1', 200003), 
                         (null, '2023-04-10 07:00:00', '1', 200004), (null, '2023-04-10 07:30:00', '1', 200004), (null, '2023-04-10 08:00:00', '1', 200004), (null, '2023-04-10 08:30:00', '1', 200004),
                         (null, '2023-04-10 09:00:00', '0', 200004), (null, '2023-04-10 09:30:00', '0', 200004), (null, '2023-04-10 10:00:00', '1', 200004), (null, '2023-04-10 10:30:00', '1', 200004),
                         (null, '2023-04-10 11:00:00', '1', 200004), (null, '2023-04-10 11:30:00', '1', 200004), (null, '2023-04-10 12:00:00', '0', 200004), (null, '2023-04-10 12:30:00', '1', 200004),
                         (null, '2023-04-10 13:00:00', '0', 200004), (null, '2023-04-10 13:30:00', '1', 200004), (null, '2023-04-10 14:00:00', '1', 200004), (null, '2023-04-10 14:30:00', '0', 200004),
                         (null, '2023-04-10 15:00:00', '1', 200004), (null, '2023-04-10 15:30:00', '1', 200004), (null, '2023-04-10 16:00:00', '0', 200004), (null, '2023-04-10 16:30:00', '1', 200004),
                         (null, '2023-04-10 17:00:00', '1', 200004), (null, '2023-04-10 17:30:00', '1', 200004), (null, '2023-04-10 18:00:00', '1', 200004), (null, '2023-04-10 18:30:00', '1', 200004),
                         (null, '2023-04-10 19:00:00', '0', 200004), (null, '2023-04-10 07:00:00', '1', 200005), (null, '2023-04-10 07:30:00', '1', 200005), (null, '2023-04-10 08:00:00', '1', 200005),
                         (null, '2023-04-10 08:30:00', '0', 200005), (null, '2023-04-10 09:00:00', '1', 200005), (null, '2023-04-10 09:30:00', '0', 200005), (null, '2023-04-10 10:00:00', '1', 200005),
                         (null, '2023-04-10 10:30:00', '1', 200005), (null, '2023-04-10 11:00:00', '0', 200005), (null, '2023-04-10 11:30:00', '1', 200005), (null, '2023-04-10 12:00:00', '0', 200005),
                         (null, '2023-04-10 12:30:00', '1', 200005), (null, '2023-04-10 13:00:00', '0', 200005), (null, '2023-04-10 13:30:00', '1', 200005), (null, '2023-04-10 14:00:00', '1', 200005),
                         (null, '2023-04-10 14:30:00', '0', 200005), (null, '2023-04-10 15:00:00', '0', 200005), (null, '2023-04-10 15:30:00', '1', 200005), (null, '2023-04-10 16:00:00', '0', 200005),
                         (null, '2023-04-10 16:30:00', '1', 200005), (null, '2023-04-10 17:00:00', '1', 200005), (null, '2023-04-10 17:30:00', '1', 200005), (null, '2023-04-10 18:00:00', '1', 200005),
                         (null, '2023-04-10 18:30:00', '1', 200005), (null, '2023-04-10 19:00:00', '1', 200005), (null, '2023-04-10 07:00:00', '0', 200006), (null, '2023-04-10 07:30:00', '1', 200006),
                         (null, '2023-04-10 08:00:00', '1', 200006), (null, '2023-04-10 08:30:00', '0', 200006), (null, '2023-04-10 09:00:00', '1', 200006), (null, '2023-04-10 09:30:00', '0', 200006),
                         (null, '2023-04-10 10:00:00', '1', 200006), (null, '2023-04-10 10:30:00', '1', 200006), (null, '2023-04-10 11:00:00', '0', 200006), (null, '2023-04-10 11:30:00', '1', 200006),
                         (null, '2023-04-10 12:00:00', '0', 200006), (null, '2023-04-10 12:30:00', '1', 200006), (null, '2023-04-10 13:00:00', '0', 200006), (null, '2023-04-10 13:30:00', '0', 200006),
                         (null, '2023-04-10 14:00:00', '1', 200006), (null, '2023-04-10 14:30:00', '0', 200006), (null, '2023-04-10 15:00:00', '0', 200006), (null, '2023-04-10 15:30:00', '1', 200006),
                         (null, '2023-04-10 16:00:00', '0', 200006), (null, '2023-04-10 16:30:00', '1', 200006), (null, '2023-04-10 17:00:00', '1', 200006), (null, '2023-04-10 17:30:00', '0', 200006),
                         (null, '2023-04-10 18:00:00', '0', 200006), (null, '2023-04-10 18:30:00', '1', 200006), (null, '2023-04-10 19:00:00', '1', 200006), (null, '2023-04-10 07:00:00', '0', 200007),
						 (null, '2023-04-10 07:30:00', '0', 200007), (null, '2023-04-10 08:00:00', '1', 200007), (null, '2023-04-10 08:30:00', '0', 200007), (null, '2023-04-10 09:00:00', '1', 200007),
                         (null, '2023-04-10 09:30:00', '0', 200007), (null, '2023-04-10 10:00:00', '1', 200007), (null, '2023-04-10 10:30:00', '1', 200007), (null, '2023-04-10 11:00:00', '0', 200007),
                         (null, '2023-04-10 11:30:00', '1', 200007), (null, '2023-04-10 12:00:00', '1', 200007), (null, '2023-04-10 12:30:00', '1', 200007), (null, '2023-04-10 13:00:00', '1', 200007),
                         (null, '2023-04-10 13:30:00', '0', 200007), (null, '2023-04-10 14:00:00', '1', 200007), (null, '2023-04-10 14:30:00', '0', 200007), (null, '2023-04-10 15:00:00', '0', 200007),
                         (null, '2023-04-10 15:30:00', '0', 200007), (null, '2023-04-10 16:00:00', '1', 200007), (null, '2023-04-10 16:30:00', '1', 200007), (null, '2023-04-10 17:00:00', '1', 200007),
                         (null, '2023-04-10 17:30:00', '0', 200007), (null, '2023-04-10 18:00:00', '0', 200007), (null, '2023-04-10 18:30:00', '1', 200007), (null, '2023-04-10 19:00:00', '1', 200007),
                         (null, '2023-04-10 07:00:00', '1', 200008), (null, '2023-04-10 07:30:00', '0', 200008), (null, '2023-04-10 08:00:00', '1', 200008), (null, '2023-04-10 08:30:00', '0', 200008),
                         (null, '2023-04-10 09:00:00', '0', 200008), (null, '2023-04-10 09:30:00', '0', 200008), (null, '2023-04-10 10:00:00', '1', 200008), (null, '2023-04-10 10:30:00', '1', 200008),
                         (null, '2023-04-10 11:00:00', '0', 200008), (null, '2023-04-10 11:30:00', '1', 200008), (null, '2023-04-10 12:00:00', '1', 200008), (null, '2023-04-10 12:30:00', '1', 200008),
                         (null, '2023-04-10 13:00:00', '0', 200008), (null, '2023-04-10 13:30:00', '0', 200008), (null, '2023-04-10 14:00:00', '1', 200008), (null, '2023-04-10 14:30:00', '0', 200008),
                         (null, '2023-04-10 15:00:00', '0', 200008), (null, '2023-04-10 15:30:00', '1', 200008), (null, '2023-04-10 16:00:00', '1', 200008), (null, '2023-04-10 16:30:00', '1', 200008),
                         (null, '2023-04-10 17:00:00', '1', 200008), (null, '2023-04-10 17:30:00', '0', 200008), (null, '2023-04-10 18:00:00', '0', 200008), (null, '2023-04-10 18:30:00', '1', 200008),
                         (null, '2023-04-10 19:00:00', '1', 200008), (null, '2023-04-10 07:00:00', '1', 200009), (null, '2023-04-10 07:30:00', '0', 200009), (null, '2023-04-10 08:00:00', '1', 200009),
                         (null, '2023-04-10 08:30:00', '0', 200009), (null, '2023-04-10 09:00:00', '0', 200009), (null, '2023-04-10 09:30:00', '0', 200009), (null, '2023-04-10 10:00:00', '1', 200009),
                         (null, '2023-04-10 10:30:00', '1', 200009), (null, '2023-04-10 11:00:00', '0', 200009), (null, '2023-04-10 11:30:00', '0', 200009), (null, '2023-04-10 12:00:00', '1', 200009),
                         (null, '2023-04-10 12:30:00', '1', 200009), (null, '2023-04-10 13:00:00', '0', 200009), (null, '2023-04-10 13:30:00', '0', 200009), (null, '2023-04-10 14:00:00', '1', 200009),
                         (null, '2023-04-10 14:30:00', '1', 200009), (null, '2023-04-10 15:00:00', '1', 200009), (null, '2023-04-10 15:30:00', '1', 200009), (null, '2023-04-10 16:00:00', '1', 200009),
                         (null, '2023-04-10 16:30:00', '1', 200009), (null, '2023-04-10 17:00:00', '1', 200009), (null, '2023-04-10 17:30:00', '1', 200009), (null, '2023-04-10 18:00:00', '0', 200009),
                         (null, '2023-04-10 18:30:00', '1', 200009), (null, '2023-04-10 19:00:00', '0', 200009);
SELECT * FROM dados;

TRUNCATE TABLE dados;
select dataHora, SUM(valor) FROM dados group by dataHora;
select SUM(valor) FROM dados group by dataHora;
SELECT valor FROM dados WHERE idDados = 250000;
-- select das tabelas simples
-- select * from empresa;
-- select * from filial;
select * from funcionario;
-- use vagaFacil;
-- select * from endereco;
-- select * from sensor;
-- select * from dados;
-- select * from bairro;
-- select * from bairro where nome in ('Jardim Paulista', 'Cerqueira César', 'Jabaquara', 'Pinheiros', 'Saúde');
-- select das tabelas relacionadas

-- UPDATE funcionario SET foto = 'usuarioPadrao.png' WHERE idFuncionario = 100005;

-- select tabela empresa e filial
-- select * from empresa join filial on fkEmpresa = idEmpresa;

-- select tabela filial e funcionario
-- select * from filial join filialFuncionario join funcionario on fkFilial = idFilial and fkFilial = idFilial;
-- select * from filialFuncionario;
-- select tabela empresa, filial e funcionario
-- select * from empresa join filial join funcionario on fkEmpresa = idEmpresa and fkFilial = idFilial;

-- select tabela rua e sensor
-- select * from endereco join sensor on fkEndereco = idEndereco;

-- select tabela sensor e dados
-- select * from sensor join dados on fkSensor = idSensor;

-- select tabela rua, sensor e dados
-- select * from endereco join sensor join dados on fkEndereco = idEndereco and fkSensor = idSensor; 

-- select tabela bairro, sensor, dados e rua 
-- select * from bairro join sensor join dados join endereco on fkEndereco = idEndereco and fkSensor = idSensor and idBairro = fkBairro;

-- select tabela bairro, bairroRenda, bairroIdade e bairroPopulacao
-- select * from bairro join bairroRenda join bairroIdade join bairroPopulacao on bairro.idBairro = bairroRenda.idBairro 
--                             and bairro.idBairro = bairroIdade.idBairro and bairro.idBairro = bairroPopulacao.idBairro;


-- drop database VagaFacil;