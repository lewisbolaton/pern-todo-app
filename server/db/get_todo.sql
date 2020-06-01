CREATE OR REPLACE FUNCTION get_todo(id integer)
RETURNS todo AS $$
  SELECT * FROM todo WHERE todo_id = id;
$$
LANGUAGE SQL;
