import { supabase } from "../supabase/supabase";
export const loginWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) {
    console.error("GitHub login error:", error.message);
    return null;
  }

  return data;
};
export const loginWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.error("Google login error:", error.message);
    return null;
  }

  return data;
};
