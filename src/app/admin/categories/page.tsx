import { getAllCategories } from "@/services/categories";
import TagList from "./CategorieList";

export default async function Tag() {
  const data = await getAllCategories(); 
  return (
    <TagList data={data} />
  )
}
