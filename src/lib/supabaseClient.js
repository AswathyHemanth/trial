import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zsjublbphppcutifrjyr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzanVibGJwaHBwY3V0aWZyanlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4ODk2NzEsImV4cCI6MjA0MTQ2NTY3MX0.B3u78H4xqFUXXeHnJcW4ZbDGE4yKjwO2VSoDh5vChqE";

export const supabase = createClient(supabaseUrl, supabaseKey);