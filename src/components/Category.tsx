'use client';
import { useEffect, useState } from "react";
import { getAllCategories } from "@/services/categories";
import Link from "next/link";
import { categories } from "@/types/categories";

export default function CategoryBlog({ open }: { open: boolean }) {
  const [categoryList, setCategoryList] = useState<categories[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getAllCategories();
      setCategoryList(data);
    }
    fetchCategories();
  }, []);

  if (!open) return null;

  return (
    <div className="absolute z-50 mt-3 bg-white dark:bg-[#1E2329] rounded-b-lg shadow-3xl py-2 min-w-40 capitalize">
      {categoryList?.map((item) => (
        <Link
          key={item.id}
          className="py-2 px-4 block text-sm hover:bg-gray-100 dark:hover:bg-[#2B3139]"
          href={`/blog/category/${item.id}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
