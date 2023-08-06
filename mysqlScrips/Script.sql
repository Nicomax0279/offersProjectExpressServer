INSERT INTO company
(username, password, active, name, description, created_at, updated_at)
VALUES('Xd', 'xd', '1', 'analistacomp', 'company especializada en analisis de sistememas', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO offer
(title, active, description, career, company, "text", modality, created_at, updated_at)
VALUES('buscamos analista', '1', 'estamos en busca tuyo si eres estudiante de analis de sistema', 'analista de sistemas', 'analistacomps', 'ya sabes unete', 'remoto', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
