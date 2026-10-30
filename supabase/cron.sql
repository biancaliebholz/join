-- Daily automatic demo reset, run inside Supabase by pg_cron (no API call,
-- no key involved). Run once in the Supabase SQL editor after schema.sql.
-- 03:00 UTC = 04:00 (winter) / 05:00 (summer) German time.
create extension if not exists pg_cron with schema pg_catalog;

-- Scheduling a job under an existing name replaces it, so this is safe to rerun.
select cron.schedule(
  'join-daily-demo-reset',
  '0 3 * * *',
  $$select public.reset_demo_data();$$
);
