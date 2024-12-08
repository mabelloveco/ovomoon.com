import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGxreHBrYmZ4d2RyYnV0cm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNjk3NjgsImV4cCI6MjAyMjc0NTc2OH0.0C_kqh_6oUq8pRRsXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

export const supabase = createClient(supabaseUrl, supabaseKey);