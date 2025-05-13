import { supabase } from "../supabase/supabase"

export async function getUsers() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;
    const { data, error } = await supabase.auth.getUser();
    if (error) throw new Error(error.message);
    return data?.user;
}