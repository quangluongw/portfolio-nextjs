import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginWithGithub, loginWithGoogle } from "@/services/login";
import { user } from "@/types/user";
import { LoginForm } from "../action/Login";

export const useAuthActions = () => {
  const router = useRouter();

  const githubMutation = useMutation<void, Error>({
    mutationFn: loginWithGithub,

    onError: (error) => {
      console.error("GitHub login error:", error.message);
    },
  });

  const googleMutation = useMutation<void, Error>({
    mutationFn: loginWithGoogle,
    onError: (error) => {
      console.error("Google login error:", error.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<user>();

  const onSubmit: SubmitHandler<user> = async (values) => {
    await LoginForm(values);
    router.refresh();
    router.push("/");
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loginWithGithub: githubMutation.mutate,
    loginWithGoogle: googleMutation.mutate,
  };
};
