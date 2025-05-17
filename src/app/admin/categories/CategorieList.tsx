"use client";
import React from "react";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { deleteTag } from "@/services/tag";
import { toast } from "sonner";
import { categories } from "@/types/categories";
import { deleteCategories } from "@/services/categories";

type Props = {
  data: categories[];
};

export default function CategorieList({ data }: Props) {
  const router = useRouter();
  console.log(data);

  const handleDelete = async (id: string) => {
    // console.log(id);

    await deleteCategories(id);
    toast.success("Xóa thành công");
    router.refresh();
  };
  const dataSource = data.map((item) => ({
    key: item.id,
    name: item.name,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (_: any, record: any) => (
        <div className="flex items-center gap-3">
          <Link href={`updatecategorie/${record.key}`}>Edit</Link>
          <button onClick={() => handleDelete(record.key)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-4">
      <div className="flex justify-end">
        <Link href="addcategorie">Add Categorie</Link>
      </div>
      <Table dataSource={dataSource} columns={columns} className="mt-10" />
    </div>
  );
}
