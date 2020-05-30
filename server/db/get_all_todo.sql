CREATE OR REPLACE function get_all_todo()
RETURNS TABLE (j json) as $$
  SELECT json_build_object('todo_id', todo_id, 'description', description)
  FROM todo
  ORDER BY todo_id ASC
$$
LANGUAGE SQL;
