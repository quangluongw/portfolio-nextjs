// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Lấy URL và Anon Key từ biến môi trường
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)
