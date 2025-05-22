"use client";
import { forgotPassword } from "@/services/forgotpassword";
import { user } from "@/types/user";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<user>();
  const onSubmit: SubmitHandler<user> = async (values: {
    email: string;
  }) => {
    try {
      await forgotPassword(values.email);
    
    } catch (err) {
      console.error("Lỗi đăng ký:", err);
    }
  };
  return (
    <div className="form-container mx-auto my-10">
      <p className="title dark:text-black">Welcome back</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="input dark:text-black"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <button className="form-btn" type="submit">
          Forgot Password
        </button>
      </form>
      <Link href="login" className="sign-up-label">
        have an account?<span className="sign-up-link">Sign in</span>
      </Link>
    </div>
  );
}
