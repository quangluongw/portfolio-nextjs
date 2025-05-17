"use client";
import "../style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { tag } from "@/types/tag";
import { updateTag } from "@/services/tag";
import { toast } from "sonner";
import { useEffect } from "react";
export default function UpdateBlog({ dataTag }: { dataTag: tag }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<tag>();
  useEffect(() => {
    reset({
      tag: dataTag.tag,
    });
  }, [dataTag, reset]);
  const router = useRouter();
  const onSubmit: SubmitHandler<tag> = async (value) => {
    try {
      await updateTag(value,dataTag.id);
      toast.success("Cập nhật thành công");
      router.push("/admin/tag");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal mt-30 mb-40 w-full m-auto">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center w-full text-2xl">Update Tag</h2>
        <div className="credit-card-info--form">
          <div className="input_container">
            <label className="input_label">Tag</label>
            <input
              className="input_field"
              type="text"
              placeholder="Enter your tag"
              {...register("tag", { required: "tag is required" })}
            />
            {errors.tag && (
              <span className="text-red-500">{errors.tag.message}</span>
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
