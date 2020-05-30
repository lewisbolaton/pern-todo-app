CREATE OR REPLACE function get_todo(id integer)
RETURNS json AS $$
  SELECT json_build_object('todo_id', todo_id, 'description', description)
  FROM todo
  WHERE todo_id = id
$$
LANGUAGE SQL;
