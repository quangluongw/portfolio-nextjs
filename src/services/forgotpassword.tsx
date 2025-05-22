import { toast } from "sonner";
import { supabase } from "../supabase/supabase";

export const forgotPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/resetpassword`,
  });
  if (error) {
    toast.error(error.message);
    throw error;
  }
  toast.success("Gửi mail thành công");
  return data;
};
export const resetPassword = async (password: string) => {
  const { data, error } = await supabase.auth.updateUser({ password });
  if (error) {
    toast.error(error.message);
    throw error;
  }
  toast.success("Thay mật khẩu thành công");
  return data;
};
