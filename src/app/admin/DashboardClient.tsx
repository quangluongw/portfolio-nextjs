"use client";

import React from "react";
import { Table } from "antd";
import Image from "next/image";
import { deleteBlog } from "@/services/blog";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ColumnsType } from "antd/es/table";

type Blog = {
  // key:string;
  id: string;
  title: string;
  image: string;
};

type Props = {
  data: Blog[];
};
export default function DashboardClient({ data }: Props) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    // console.log(id);

    try {
      await deleteBlog(id);
      router.refresh();
      alert("xóa thanh cong");
    } catch (error) {
      console.log(error);
    }
  };
  const dataSource:Blog[] = data.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
  }));

  const columns: ColumnsType<Blog> = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (src: string) => (
        <Image src={src} alt="img" width={100} height={100} />
      ),
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (_: unknown, record:Blog) => (
        <div className="flex items-center gap-3">
          <Link href={`admin/updateBlog/${record.id}`}>Edit</Link>
          <button onClick={() => handleDelete(record.id)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-4">
      <div className="flex justify-end">
        <Link href="admin/addblog">Add blog</Link>
      </div>

      <Table dataSource={dataSource} columns={columns} className="mt-10" />
    </div>
  );
}
