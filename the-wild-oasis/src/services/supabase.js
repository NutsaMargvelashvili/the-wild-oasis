import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fcamvlkuwyweknsziibv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjYW12bGt1d3l3ZWtuc3ppaWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzODc1MjAsImV4cCI6MjAxMTk2MzUyMH0.Zddu_cMAwWiPPcW0DuyVhEXqMAGdGYKRsxjNR99WPHg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
