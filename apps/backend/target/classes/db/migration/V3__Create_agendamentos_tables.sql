ALTER TABLE agendamentos 
ALTER COLUMN datas SET datas TYPE DATE 
USING datas::TEXT::DATE;
