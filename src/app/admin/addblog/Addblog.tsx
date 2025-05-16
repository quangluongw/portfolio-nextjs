"use client";
import React, { useState } from "react";
import "../style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "antd";
import { addBlog } from "@/services/blog";
import { useRouter } from "next/navigation";
import Upload from "@/Upload/upload";
import { Inputs } from "@/types/bloginput";

type Category = {
  id: string;
  name: string;
};

export default function Addblog({ categories }: { categories: Category[] }) {
  const [imageUpload, setImageUpload] = useState("");
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (value) => {
    try {
      const data = [{ ...value, image: imageUpload }];
      await addBlog(data);
      router.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal mt-20 w-full m-auto">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center w-full text-2xl">Add Blog</h2>
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
          <Upload setimages={setImageUpload} />
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
              className="input_field"
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
