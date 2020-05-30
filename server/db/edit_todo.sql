CREATE PROCEDURE edit_todo(id integer, new_description varchar(255))
LANGUAGE SQL
AS $$
UPDATE todo SET description = new_description WHERE todo_id = id;
$$;
