import { getCategoriesId } from "@/services/categories";
import Update from "../Update";

export default async function UpdateBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
 const data= await getCategoriesId(id)
  return <Update  data={data} />;
}
