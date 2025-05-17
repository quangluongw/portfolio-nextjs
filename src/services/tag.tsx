import { tag } from "@/types/tag";
import { supabase } from "../supabase/supabase";

export const getTags = async () => {
  const { data, error } = await supabase.from("tag").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export async function getTagId(id: string) {
  const { data, error } = await supabase
    .from("tag")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Tag not found");
  }

  return data;
}

export const deleteTag = async (id: string) => {
  const { data, error } = await supabase.from("tag").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Tag not found");
  }
  return data;
};
export const addTag = async (value:tag) => {
  const { data, error } = await supabase.from("tag").insert([value]);
  if (error) {
    console.error(error);
    throw new Error("thêm thất bại");
  }
  return data;
};
export const updateTag = async (value:tag,id:string) => {
  const { data, error } = await supabase
    .from("tag")
    .update(value)
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error("update thất bại");
  }
  return data;
};
