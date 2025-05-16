import { getAllCategories } from "@/services/categories";
import Updateblog from "../Update";
import { getBlogId } from "@/services/blog";

export default async function UpdateBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
 const dataBlog= await getBlogId(id)
  const categories = await getAllCategories();
  return <Updateblog categories={categories} dataBlog={dataBlog} />;
}
