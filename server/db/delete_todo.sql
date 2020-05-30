CREATE PROCEDURE delete_todo(id integer)
LANGUAGE SQL
AS $$
DELETE FROM todo WHERE todo_id = id;
$$;
