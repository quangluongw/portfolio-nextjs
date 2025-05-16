import Addblog from "./Addblog";
import { getAllCategories } from "@/services/categories";

export default async function AddBlogPage() {
  const categories = await getAllCategories();
  return <Addblog categories={categories} />;
}