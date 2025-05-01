/* eslint-disable */

"use client";

import InputField from "@/components/auth/InputField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginFormValues, loginSchema } from "@/lib/schema";
import { useLoginUserMutation } from "@/redux/features/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/slice/userSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function LoginForm() {
  const router = useRouter();
  const [loginUser] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const dispatch = useAppDispatch();

  const onLogin = async (data: LoginFormValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const response = await loginUser(data).unwrap();
      if (response) {
        toast.success("Login successful!", { id: toastId });
        dispatch(setUser(response?.data));
        router.push("/");
      }
    } catch (error: any) {
      const errorMessage =
        error.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            register={register("email")}
            error={errors?.email}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            register={register("password")}
            error={errors?.password}
          />

          <Button
            type="submit"
            className="w-full bg-darkPrimary hover:bg-buttonHoverDark"
            disabled={!isValid}
          >
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4">
        <div className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-darkPrimary hover:underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
