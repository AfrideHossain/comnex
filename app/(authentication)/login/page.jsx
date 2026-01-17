"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LoginForm } from "@/components/Authentication/LoginForm";
import { authenticateUser } from "@/actions/auth.action";

const LoginPage = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  // router setup
  const router = useRouter();
  // onsubmit handler
  const onSubmit = async (submissionData) => {
    try {
      //   console.log(submissionData);
      const authUser = await authenticateUser(
        submissionData.email,
        submissionData.password
      );
      if (authUser.success !== true) {
        throw new Error("Invalid credentials");
      }

      toast.success("Login successful!");
      router.push("/products");
    } catch (error) {
      //   console.log("sign in error=> ", error);
      toast.error("Login failed! Check your credentials.");
      setMessage("Check your credentials");
    }
  };
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmitHandler={onSubmit}
          errors={errors}
          isSubmitting={isSubmitting}
          message={message}
        />
      </div>
    </div>
  );
};

export default LoginPage;
