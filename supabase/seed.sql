-- Restores the fictional demo state (tasks and shared demo contacts).
-- Run in the Supabase SQL editor after schema.sql, or any time to reset the
-- demo by hand. Registered accounts and their own contact rows are kept.
select public.reset_demo_data();
