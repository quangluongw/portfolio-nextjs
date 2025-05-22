import { getBlogs } from "@/services/blog";
import BlogPage from "./BlogPage";

interface SearchParams {
  page?: string;
  tag?: string;
  search?: string;
}

export default async function Blog({
  searchParams
}: {
  searchParams: SearchParams
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const tagId = searchParams.tag;
  const search = searchParams.search;
  const data = await getBlogs({ page, tagId, search });
  
  return (
    <div>
      <div className="flex gap-4 mt-4 pl-2"></div>
      <BlogPage data={data} />
    </div>
  );
}