import { supabase } from "../supabase/supabase";
import { Inputs } from "@/types/bloginput";

export const getBlogs = async () => {
  const { data, error } = await supabase.from("blog").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
export const getBlogCategory = async () => {
  const { data, error } = await supabase.from("blog").select(`
      *,
      categories:category_id (
        id,
        name
      )
    `);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export async function getBlogId(id: string) {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Blogs not found");
  }

  return data;
}

export const deleteBlog = async (id: string) => {
  const { data, error } = await supabase.from("blog").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Blogs not found");
  }
  return data;
};
export const addBlog = async (value: Inputs[]) => {
  const { data, error } = await supabase.from("blog").insert(value);
  if (error) {
    console.error(error);
    throw new Error("thêm thất bại");
  }
  return data;
};
export const updateBlog = async (value: Inputs[],id:string) => {
  const { data, error } = await supabase
    .from("blog")
    .update(value)
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error("thêm thất bại");
  }
  return data;
};
