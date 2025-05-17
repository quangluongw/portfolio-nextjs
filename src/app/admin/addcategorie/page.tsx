"use client";
import "../style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { categories } from "@/types/categories";
import { addCategories } from "@/services/categories";
export default function Addblog() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<categories>();
  const router = useRouter();
  const onSubmit: SubmitHandler<categories> = async (value) => {
    try {
      await addCategories(value);
      toast.success("Thêm thành công");
      router.push("/admin/categories");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal mt-30 mb-40 w-full m-auto">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center w-full text-2xl">Add Categorie</h2>
        <div className="credit-card-info--form">
          <div className="input_container">
            <label className="input_label">Name</label>
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
