// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Lấy URL và Anon Key từ biến môi trường
const supabaseUrl = "https://mqaesyeqvgxzzdgcyspw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xYWVzeWVxdmd4enpkZ2N5c3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3OTc1NzUsImV4cCI6MjA2MjM3MzU3NX0.oNZSuBo6CW8xDGYcNbQS-u6WxUuNdx8EfM0OzdtbPiY"

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)
