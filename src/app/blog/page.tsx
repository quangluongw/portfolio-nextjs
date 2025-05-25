"use client";
import { getBlogs } from "@/services/blog";
import BlogPage from "./BlogPage";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { dataBlog } from "@/types/bloginput";

function BlogContent() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<dataBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const tagId = searchParams.get("tag") || "";
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getBlogs({ page, tagId, search, category });
        setData(result);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, tagId, search, category]);

  if (loading || !data) return <div className="p-4">Đang tải dữ liệu...</div>;

  return <BlogPage data={data} />;
}

export default function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}
