import { supabase } from "../supabase/supabase";
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


