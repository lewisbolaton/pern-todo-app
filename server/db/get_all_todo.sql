CREATE OR REPLACE FUNCTION get_all_todo()
RETURNS TABLE (todo_id integer, description varchar(255)) AS
$$
  SELECT * FROM todo
  ORDER BY todo_id ASC;
$$
LANGUAGE SQL;
