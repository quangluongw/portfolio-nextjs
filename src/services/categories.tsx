import { categories } from "@/types/categories";
import { supabase } from "../supabase/supabase";
import { toast } from "sonner";

export const getAllCategories = async () => {
    const { data, error } = await supabase
        .from('categories')
        .select('*');

    if (error) throw new Error(error.message);

    return data;
};
export async function getCategoriesId(id: string) {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      console.error(error);
      throw new Error("categories not found");
    }
  
    return data;
  }
  
  export const deleteCategories = async (id: string) => {
    const { data, error } = await supabase.from("categories").delete().eq("id", id);
    if (error) {
      toast.error(error.message)
      throw new Error("categories not found");
    }
    return data;
  };
  export const addCategories = async (value:categories) => {
    const { data, error } = await supabase.from("categories").insert([value]);
    if (error) {
      console.error(error);
      throw new Error("thêm thất bại");
    }
    return data;
  };
  export const updateCategories = async (value:categories,id:string) => {
    const { data, error } = await supabase
      .from("categories")
      .update(value)
      .eq("id", id)
      .select();
    if (error) {
      console.error(error);
      throw new Error("update thất bại");
    }
    return data;
  };