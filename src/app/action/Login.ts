import { supabase } from "@/supabase/supabase";
import { toast } from "sonner";

export const LoginForm = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      toast.error(error.message);
      throw error;
    }
    toast.success("Đăng nhập thành công");
    return data;
  };