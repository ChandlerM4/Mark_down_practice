# SQL Server

> ## Select

1. Consultar informacion de una tabla donde un campo tiene un valor especifico.

SELECT * FROM tableName WHERE CampNum = Number

2. Consultar informacion dando valores a campos y sus nombres

SELECT CASE Campo1 WHEN 1 THEN 'Number1' WHEN 2 THEN 'Number2' END AS [Name] FROM table

3. Consultar informacion solo de campos especificos.

SELECT Campo1, Campo2, Campo3 FROM table

> ## Insert

1. INSERT INTO table (Campo1, Campo2, Campo3)
VALUES (Dato1, Dato2, Dato3)

2. INSERT INTO table (Campo1, Campo2, Campo3)
VALUES (@Dato1, @Dato2, @Dato3)

3. 

> ## Update

* SET es el que cambia en los UPDATE

1. UPDATE table SET Campo1 = Dato1 WHERE Campo2 = Dato2

2. UPDATE table SET Campo1 = Dato1 WHERE Campo2 in (dato2, dato3, dato4)

3. 