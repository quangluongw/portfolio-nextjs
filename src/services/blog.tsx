import { supabase } from "../supabase/supabase";
import { Inputs } from "@/types/bloginput";

export async function getBlogs({
  page = 1,
  category,
  tagId,
  search,
}: {
  page?: number;
  category?: string;
  tagId?: string;
  search?: string;
}) {
  const pageSize = 10;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("blog")
    .select("*", { count: "exact" })
    .range(from, to);

  if (category) {
    query = query.eq("category_id", category);
  }

  if (tagId) {
    query = query.eq("tag_id", tagId);
  }

  if (search) {
    query = query.or(`title.ilike.%${search}%`);
  }

  const { data, error, count } = await query;

  if (error) throw error;

  return {
    data,
    page,
    totalPages: count ? Math.ceil(count / pageSize) : 0,
  };
}

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

export async function getBlogId(slug: string) {
  // 1. Lấy blog theo slug
  const { data: blog, error: blogError } = await supabase
    .from("blog")
    .select("*")
    .eq("slug", slug)
    .single();

  if (blogError || !blog) {
    return null;
  }

  // 2. Lấy tên category từ bảng 'category'
  const { data: categoryData, error: categoryError } = await supabase
    .from("category")
    .select("name")
    .eq("id", blog.category_id)
    .single();

  if (categoryError) {
    console.warn("Không tìm thấy category:", categoryError);
  }

  // 3. Lấy tên tag từ bảng 'tag'
  const { data: tagData, error: tagError } = await supabase
    .from("tag")
    .select("tag")
    .eq("id", blog.tag_id)
    .single();

  if (tagError) {
    console.warn("Không tìm thấy tag:", tagError);
  }

  // 4. Trả về dữ liệu gộp
  return {
    ...blog,
    category_name: categoryData?.name ?? null,
    tag_name: tagData?.tag ?? null,
  };
}

export async function getBlogTagId(blogId: string) {
  const { data, error } = await supabase
    .from("blog_tags")
    .select("tag(*)") // truy vấn bảng `tag` thông qua quan hệ
    .eq("blog_id", blogId);

  if (error) {
    console.error(error);
    throw new Error("Tags not found");
  }

  return data.map((item) => item.tag); // Trả về danh sách tag
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
export const updateBlog = async (value: Inputs[], id: string) => {
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
