CREATE PROCEDURE add_todo(description varchar(255))
LANGUAGE SQL
AS $$
INSERT INTO todo (description) VALUES (description);
$$;
