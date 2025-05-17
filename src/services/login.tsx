import { toast } from "sonner";
import { supabase } from "../supabase/supabase";
import { useRouter } from "next/navigation";
export const loginWithGithub = async (): Promise<void> => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) throw error;
};

export const loginWithGoogle = async (): Promise<void> => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) throw error;
};

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
