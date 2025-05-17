import { toast } from "sonner";
import { supabase } from "../supabase/supabase";
export const Register = async ({ email, password }: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      
      options: {
        emailRedirectTo: `http://localhost:3000//login`, 
      },
    });
  
    if (error) {
      toast.error(error.message);
      throw error; 
    }
  
    toast.success("Đăng ký thành công! Kiểm tra email để xác nhận.");
    return data;
  };
