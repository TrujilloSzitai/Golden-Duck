create procedure consultarL�miteTarj
@num_tarj int
as 
begin 
select limite from tarjetas where num_tarj = @num_tarj
end

