USE [HomebankingPass]
GO
/****** Object:  StoredProcedure [dbo].[upd_pass]    Script Date: 14/11/2022 09:27:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[upd_pass]
@idus int,
@passupd nvarchar(15)
as 
begin 
UPDATE passTab SET pass = @passupd WHERE id_us = @idus
end