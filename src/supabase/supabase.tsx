import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mqaesyeqvgxzzdgcyspw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xYWVzeWVxdmd4enpkZ2N5c3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3OTc1NzUsImV4cCI6MjA2MjM3MzU3NX0.oNZSuBo6CW8xDGYcNbQS-u6WxUuNdx8EfM0OzdtbPiY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
