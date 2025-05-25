import { getBlogId } from "@/services/blog";
import { FormatDate } from "@/utils/Format";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function BlogId({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = await getBlogId(blogId);
  if (!blog) {
    notFound();
  }
  return (
    <article className="mx-auto grid grid-cols-14 ">
      <div className="col-span-full mt-8 lg:col-span-9 lg:pr-4">
        <div className=" font-semibold mb-6">
          <h1
            className="text-2xl text-black first-letter:uppercase
           dark:text-white md:text-[28px]"
          >
            {blog.title}
          </h1>
          <p className="mt-2 text-sm text-[#707A8A]">
            {<FormatDate date={blog.created_at} />}
          </p>
          <div className="mt-4">
            <Image
              src={blog.image}
              width={500}
              height={500}
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-screen-lg ">
          <div>
            <div className="prose prose-headings:mt-8 prose-headings:font-semibold dark:prose-headings:text-white prose-headings:text-black prose-h2:text-[26px] prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base prose-pre:p-0 prose-ul:list-none prose-ul:pl-0 dark:prose-strong:text-white dark:text-gray-400 prose-strong:text-black prose-em:text-black dark:prose-em:text-white prose-code:dark:text-white tracking-normal dark:prose-blockquote:text-gray-200">
              <p>{blog.longdescription}</p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 left-4 right-4 z-30 lg:hidden">
          <div className="relative">
            <div className="inline-flex gap-2 bg-FAFAFA dark:bg-1E2329 px-2 py-1 rounded-lg shadow-md">
              <p className="p-1.5 hover:bg-FAFAFA hover:dark:bg-1E2329 rounded-full transition-all cursor-pointer relative">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="lucide lucide-share2 size-5"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="my-10 flex items-center justify-center gap-4">
          <p className="h-0.5 w-10 bg-gray-700"></p>
          <p className="text-gray-700">Cảm ơn bạn ghé thăm</p>
          <p className="h-0.5 w-10 bg-gray-700"></p>
        </div>
      </div>
      <div className="col-span-full px-4 lg:col-span-5 lg:pl-6 xl:pl-12">
        <div className="sticky top-20">
          <div className="mb-2 py-3 flex items-center gap-2">
            <Link
              className="bg-sky-500/20 text-sky-600 hover:!text-sky-600 dark:bg-sky-500/20 dark:text-sky-500 dark:hover:text-sky-500 font-medium inline-block px-2.5 py-1 rounded-full text-xs transition-all"
              href={`/blog?tag=${blog.tag_id}`}
            >
              <p>{blog.tag_name}</p>
            </Link>
          </div>
          <div className="mb-3 hidden lg:block">
            <p className="font-semibold">Chia sẻ bài viết</p>
            <div className="flex gap-4 py-3 *:cursor-pointer">
              <button
                className="react-share__ShareButton"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                  font: "inherit",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="size-5 text-[#707A8A] hover:text-black hover:dark:text-white transition-all"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>share facebook</title>
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </button>
              <button title="copy link">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="size-5 text-[#707A8A] hover:text-black hover:dark:text-white transition-all"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>copy link</title>
                  <path d="M17 17H22V19H19V22H17V17ZM7 7H2V5H5V2H7V7ZM18.364 15.5355L16.9497 14.1213L18.364 12.7071C20.3166 10.7545 20.3166 7.58866 18.364 5.63604C16.4113 3.68342 13.2455 3.68342 11.2929 5.63604L9.87868 7.05025L8.46447 5.63604L9.87868 4.22183C12.6123 1.48816 17.0445 1.48816 19.7782 4.22183C22.5118 6.9555 22.5118 11.3877 19.7782 14.1213L18.364 15.5355ZM15.5355 18.364L14.1213 19.7782C11.3877 22.5118 6.9555 22.5118 4.22183 19.7782C1.48816 17.0445 1.48816 12.6123 4.22183 9.87868L5.63604 8.46447L7.05025 9.87868L5.63604 11.2929C3.68342 13.2455 3.68342 16.4113 5.63604 18.364C7.58866 20.3166 10.7545 20.3166 12.7071 18.364L14.1213 16.9497L15.5355 18.364ZM14.8284 7.75736L16.2426 9.17157L9.17157 16.2426L7.75736 14.8284L14.8284 7.75736Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl px-8">
            <ins
              className="adsbygoogle justify-center"
              style={{ display: "flex" }}
              data-ad-client="ca-pub-3824367528466265"
              data-ad-slot={5883269109}
              data-ad-format="auto"
              data-full-width-responsive="true"
              data-adsbygoogle-status="done"
            >
              <iframe
                id="aswift_0"
                style={{
                  height: "1px !important",
                  maxHeight: "1px !important",
                  maxWidth: "1px !important",
                  width: "1px !important",
                }}
              ></iframe>
            </ins>
          </div>
        </div>
      </div>
    </article>
  );
}
