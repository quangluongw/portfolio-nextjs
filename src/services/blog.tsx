import supabase from "../supabase/supabase"

export const getBlogs = async () => {
  const { data, error } = await supabase
    .from('profile')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
export async function getBlogId(id:string) {
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Blogs not found");
  }

  return data;
}