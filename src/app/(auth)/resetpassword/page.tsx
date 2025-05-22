"use client";
import { resetPassword } from "@/services/forgotpassword";
import { user } from "@/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ForgotPassword() {
  const router=useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<user>();
  const onSubmit: SubmitHandler<user> = async (values: {
    password: string;
  }) => {
    await resetPassword(values.password);
    router.push("/login")
  };
  return (
    <div className="form-container mx-auto my-10">
      <p className="title dark:text-black">Reset Password</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          className="input dark:text-black"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <button className="form-btn" type="submit">
        Reset Password
        </button>
      </form>
      <Link href="login" className="sign-up-label">
        have an account?<span className="sign-up-link">Sign in</span>
      </Link>
    </div>
  );
}
