USE [HomebankingPass]
GO
/****** Object:  Trigger [dbo].[not_del]    Script Date: 14/11/2022 09:27:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER TRIGGER [dbo].[not_del]  ON [dbo].[passTab] INSTEAD OF DELETE 
AS BEGIN
print 'No se pudo borrar el valor'
END