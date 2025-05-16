"use client";
import React, { useEffect, useState } from "react";
import "../style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "antd";
import { updateBlog } from "@/services/blog";
import { useRouter } from "next/navigation";
import Upload from "@/Upload/upload";
import { Inputs } from "@/types/bloginput";

type Category = {
  id: string;
  name: string;
};

export default function Updateblog({
  categories,
  dataBlog,
}: {
  categories: Category[];
  dataBlog: Inputs;
}) {
  const [imageUpload, setImageUpload] = useState("");
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  useEffect(() => {
    if (dataBlog) {
      reset({
        title: dataBlog.title || "",
        description: dataBlog.description || "",
        longdescription: dataBlog.longdescription || "",
        category_id: dataBlog.category_id || "",
      });
      setImage(dataBlog.image || "");
    }
  }, [dataBlog, reset]);
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (value) => {
    try {
      const data = [{ ...value, image: imageUpload ? imageUpload : image }];
      await updateBlog(data, dataBlog.id);
      router.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal mt-20 w-full m-auto">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center w-full text-2xl">Update Blog</h2>
        <div className="credit-card-info--form">
          <div className="input_container">
            <label className="input_label">Title</label>
            <input
              className="input_field"
              type="text"
              placeholder="Enter your title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>
          <Upload images={image} setimages={setImageUpload} />
          <div className="input_container">
            <label className="input_label">Description</label>
            <input
              className="input_field"
              type="text"
              placeholder="Enter your description"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>
          <div className="input_container">
            <label className="input_label">Long description</label>
            <textarea
              className="input_field pt-4"
              placeholder="Enter your long description"
              rows={4}
              {...register("longdescription", {
                required: "Long description is required",
              })}
            />
            {errors.longdescription && (
              <span className="text-red-500">
                {errors.longdescription.message}
              </span>
            )}
          </div>
          <div className="input_container">
            <label className="input_label">Category</label>
            <select
              className="border-2 border-gray-200 p-2 w-full"
              {...register("category_id", { required: "Category is required" })}
            >
              <option value="">Select a category</option>
              {categories.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <span className="text-red-500">{errors.category_id.message}</span>
            )}
          </div>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
