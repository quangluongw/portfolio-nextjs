"use client";
import "../style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";
import { categories } from "@/types/categories";
import { updateCategories } from "@/services/categories";
export default function UpdateBlog({ data }: { data: categories }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<categories>();
  useEffect(() => {
    reset({
      name: data.name,
    });
  }, [data, reset]);
  const router = useRouter();
  const onSubmit: SubmitHandler<categories> = async (value) => {
    try {
      await updateCategories(value,data.id);
      toast.success("Cập nhật thành công");
      router.push("/admin/categories");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal mt-30 mb-40 w-full m-auto">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center w-full text-2xl">Update categories</h2>
        <div className="credit-card-info--form">
          <div className="input_container">
            <label className="input_label">name</label>
            <input
              className="input_field"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
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
