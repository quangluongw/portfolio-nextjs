"use client";
import React, {  useState } from "react";
import "../style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "antd";
import { addBlog } from "@/services/blog";
import { useRouter } from "next/navigation";
import Upload from "@/Upload/upload";
import { Inputs } from "@/types/bloginput";
import { toast } from "sonner";
// import { getTags } from "@/services/tag";
// import Image from "next/image";

type Category = {
  id: string;
  name: string;
};

// type Tag = {
//   id: string;
//   tag: string;
// };

export default function Addblog({ categories }: { categories: Category[] }) {
  const [imageUpload, setImageUpload] = useState("");
  // const [tags, setTags] = useState<Tag[]>([]);
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);
  // const [preview, setPreview] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const router = useRouter();

  // useEffect(() => {
  //   const fetchTags = async () => {
  //     try {
  //       const result = await getTags();
  //       setTags(result);
  //     } catch (error) {
  //       console.error("Failed to fetch tags", error);
  //     }
  //   };
  //   fetchTags();
  // }, []);

  const onSubmit: SubmitHandler<Inputs> = async (value) => {
    if (imageUpload) {
      
      const blogData = {
        ...value,
        image: imageUpload,
        // tag_ids: selectedTags,
      };
      await addBlog([blogData]);
      router.push("/admin");
    }else{
      toast.error("Chưa thêm ảnh")
    }
  };
  return (
    <div className="modal mt-20 w-full m-auto">
      <form className="form dark:bg-[#2D2D2D] rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center w-full text-2xl dark:text-[#E0F7FA]">Add Blog</h2>
        <div className="credit-card-info--form">
          <div className="input_container">
            <label >Title</label>
            <input
              className="input_field dark:text-white  border-2 dark:border-[#4A4A4A]"
              type="text"
              placeholder="Enter your title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>
          <label htmlFor="" >Image</label>
          <Upload setimages={setImageUpload} />
          {/* <div className="input_container">
            <label className="input_label">Upload Image</label>
            <input type="file" accept="image/*" onChange={(e)=>handChange(e)} />
            <Image
              src={preview}
              width={300}
              height={300}
              className="aspect-video w-full rounded-md object-cover mt-2"
              alt="Uploaded preview"
            />
          </div> */}
          <div className="input_container">
            <label >Description</label>
            <input
              className="input_field dark:text-white  border-2 dark:border-[#4A4A4A]"
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
            <label >Long description</label>
            <textarea
              className="input_field dark:text-white  border-2 dark:border-[#4A4A4A]"
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
            <label >Category</label>
            <select
              className="border-2 rounded-md border-gray-200 p-2 w-full dark:text-white  dark:border-[#4A4A4A]"
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

          {/* <div className="input_container">
            <label className="input_label">Tags</label>
            <Space style={{ width: "100%" }} direction="vertical">
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                value={selectedTags}
                onChange={(value) => setSelectedTags(value)}
                options={tags.map((item) => ({
                  label: item.tag,
                  value: item.id,
                }))}
              />
            </Space>
          </div> */}
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
