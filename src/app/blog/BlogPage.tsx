"use client";

import { Inputs } from "@/types/bloginput";
import Image from "next/image";
import Link from "next/link";
type dataBlog = {
  data: Inputs[];
  totalPages: number;
  page: number;
};

export default function BlogPage({ data }: { data: dataBlog }) {
  return (
    <div className="mx-auto sm:mt-6">
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data?.data.map((item) => (
          <article className="mb-2 sm:mb-8 cursor-pointer" key={item.id}>
            <div className="rounded-lg transition-all dark:hover:bg-[#1B1F24] ">
              <Link href={`blog/${item.id}`}>
                <div className="p-4">
                  <Image
                    src={item.image}
                    width={300}
                    height={300}
                    className="aspect-video w-full rounded-md object-cover"
                    alt={item.title || ""}
                  />
                  <div className="pt-3 md:pt-6">
                    <h2 className="line-clamp-3 text-pretty py-1.5 text-lg font-semibold leading-8 md:text-xl">
                      {item.title}
                    </h2>
                    <div className="line-clamp-3 text-sm">
                      <p className="text-pretty text-gray-500">{item.description}</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">5/10/2024</p>
                  </div>
                </div>
              </Link>
              {/* <div className="px-4 pb-3 flex">
                <p className="bg-purple-500/20 text-purple-600 hover:!text-purple-600 dark:bg-purple-500/20 dark:text-purple-500 dark:hover:text-purple-500 font-medium inline-block px-2.5 py-1 rounded-full text-xs transition-all">
                  {item.anguage}
                </p>
              </div> */}
            </div>
          </article>
        ))}
      </section>

      <div className="flex justify-center gap-2">
        {Array.from({ length: data.totalPages }, (_, index) => (
          <Link href={`?page=${index + 1}`} key={index}>
            <button
              className={`${
                data.page === index + 1
                  ? "bg-[#1b1f24]"
                  : "border border-[#3e4c5c] text-[#3e4c5c]"
              } w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-white `}
            >
              {index + 1}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
