INSERT INTO CATEGORIES(CATEGORY_NAME) VALUES('ARRECADACAO');
INSERT INTO CATEGORIES(CATEGORY_NAME) VALUES('DISTRIBUICAO');
INSERT INTO CATEGORIES(CATEGORY_NAME) VALUES('VENDA');

INSERT INTO EVENTS(ADDRESS, CATEGORY_ID, DESCRIPTION, DATE_TIME_START, DATE_TIME_END, STATUS) VALUES('Parque Infantil - Centro', 1, 'Venda local de doces caseiros, diretamente na barraca VIVA', '2022-12-17 14:00:00', '2022-12-27 17:00:00', 'CONFIRMADO');
INSERT INTO EVENTS(ADDRESS, CATEGORY_ID, DESCRIPTION, DATE_TIME_START, DATE_TIME_END, STATUS) VALUES('Praça Pedro de Toledo - Centro', 2,'Distribuição de almoço no local para nossos amigos desafortunados. Toda ajuda será bem-vinda', '2022-12-17 10:00:00', '2022-12-17 14:00:00', 'CONFIRMADO');

INSERT INTO USERS(EMAIL, PASSWORD) VALUES('mvalerio@gmail.com', '12feijao@arroz');
INSERT INTO USERS(EMAIL, PASSWORD) VALUES('admin@admin.com', '123@admin');