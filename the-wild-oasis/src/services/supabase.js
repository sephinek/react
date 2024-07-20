import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://omseosxiakplmkglfbnx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tc2Vvc3hpYWtwbG1rZ2xmYm54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNTI5NTksImV4cCI6MjAzNjkyODk1OX0.i933X10rx99LJx_O8-2rF_Y_B4p_BQ6suytbScOOnM0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
