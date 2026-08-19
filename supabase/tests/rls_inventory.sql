-- Production/staging security inventory: this query should return zero rows for
-- exposed public tables that are intended to be directly reachable through the Data API.
select n.nspname as schema_name, c.relname as table_name
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relkind = 'r'
  and c.relname not like '_prisma_%'
  and not c.relrowsecurity
order by c.relname;
