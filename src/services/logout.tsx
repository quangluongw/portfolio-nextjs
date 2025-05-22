import { toast } from "sonner";
import { supabase } from "../supabase/supabase";
export const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast.error(error.message)
    } else {
        toast.success("Đăng xuất thành công")
        
    }
  }