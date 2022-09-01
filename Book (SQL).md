# SQL Server

> ## Select

1. Consultar informacion de una tabla donde un campo tiene un valor especifico.

        SELECT * FROM tableName WHERE CampNum = Number

2. Consultar informacion dando valores a campos y sus nombres

        SELECT CASE Campo1 WHEN 1 THEN 'Number1' WHEN 2 THEN 'Number2' END AS [Name] FROM table

3. Consultar informacion solo de campos especificos.

        SELECT Campo1, Campo2, Campo3 FROM table

> ## Insert

      INSERT INTO table (Campo1, Campo2, Campo3)
VALUES (Dato1, Dato2, Dato3)

      INSERT INTO table (Campo1, Campo2, Campo3)
VALUES (@Dato1, @Dato2, @Dato3)

> ## Update

* SET es el que cambia en los UPDATE

      UPDATE table SET Campo1 = Dato1 WHERE Campo2 = Dato2

      UPDATE table SET Campo1 = Dato1 WHERE Campo2 in (dato2, dato3, dato4)

> ## Delete and Drop

      DROP TABLE tablename; (Delete a table completly.)

      TRUNICATE TABLE tablename; (Delete all the content within a table)

      DELETE FROM tablename WHERE campo1 = dato1; (Only delete an item within a table)

      DEELTE FROM tablename; (Delete all the items within a table)

> ## Stored Ptocedure

* Stored Procedure Example

        USE [NameDB]
        GO
        SET ANSI_NULLS ON
        GO
        SET QUOTED_IDENTIFIER ON
        GO

        CREATE PROCEDURE NameStored

        --@intFolioCon int,
        @intNumeroEmp int,
        --@dtFecha datetime,
        @intConsumo int,
        --@dtFechaActCon datetime,
        @vchrUsuario varchar(80)
        --@intEstatusCon int
        AS
        DECLARE
        @intErrNo int,
        @strErrMsg varchar(500)

        DECLARE @Bonos int --Bonos es igual Saldo_Boletos
        SELECT @Bonos = Saldo_Boletos FROM CMD_Boletos_Comida WHERE ID_Empleado = @intNumeroEmp

        IF (@intNumeroEmp IS NULL)
            BEGIN
                select 	@intErrNo = 50000 --en adelante
                select	@strErrMsg = 'Campo vacio... Imposible continuar.'
            GOTO error
        END
            IF (@intConsumo IS NULL)
            BEGIN
                select 	@intErrNo = 50000 --en adelante
                select	@strErrMsg = 'Campo vacio... Imposible continuar.'
            GOTO error
        END
            IF (@vchrUsuario IS NULL)
            BEGIN
                select 	@intErrNo = 50000 --en adelante
                select	@strErrMsg = 'Campo vacio... Imposible continuar.'
            GOTO error
        END
        
        IF(@Bonos >= @intConsumo)
            BEGIN --Insertar en tblConsumos datos.
                INSERT INTO tblConsumos (Numero,Fecha,Consumo,Usuario,Estatus)
                VALUES (@intNumeroEmp,GETDATE(),@intConsumo,@vchrUsuario,0)

                --Actualizar en CMD_Boletos_Comida los datos despues de la insercion.
                UPDATE CMD_Boletos_Comida SET Boletos_Consumidos = Boletos_Consumidos + @intConsumo, Saldo_Boletos = Total_Boletos - Boletos_Consumidos
                WHERE ID_Empleado = @intNumeroEmp
            END
            ELSE
                BEGIN
                    SELECT @strErrMsg = 'Saldo Insuficiente.'
                    GOTO error
                END

        RETURN 0

        error:
        RAISERROR(@strErrMsg,16,-1,@intErrNo)
        RETURN 1

> ## INNER JOIN, LEFT and RIGHT

* Inner Join
        
        select a.campo1, b.campo1, c.campo1 
        from TableName1 a INNER JOIN TableName2 b ON
        a.campo1 = b.campo1
        INNER JOIN TableName3 c ON a.campo2 = c.campo2
        WHERE a.campo3='200250'
