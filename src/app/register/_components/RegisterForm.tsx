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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RegisterFormValues, registerSchema } from "@/lib/schema";
import { useRegisterUserMutation } from "@/redux/features/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function RegisterForm() {
  const [role, setRole] = useState("user");
  const router = useRouter();
  const [registerUser] = useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onRegister = async (data: RegisterFormValues) => {
    const body = {
      full_name: data.full_name,
      email: data.email,
      password: data.password,
      ...(role === "admin" ? { role } : {}),
    };
    const toastId = toast.loading("Creating account...");
    try {
      const response = await registerUser(body).unwrap();
      if (response) {
        toast.success("Registration successful! Please login.", {
          id: toastId,
        });
        router.push("/login");
      }
    } catch (error: any) {
      const errorMessage =
        error.data?.message || "Registration failed. Please try again.";
      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="user"
          value={role}
          onValueChange={setRole}
          className="w-full mb-6"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="user">User</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
        </Tabs>

        <form onSubmit={handleSubmit(onRegister)} className="space-y-4">
          <InputField
            type="text"
            label="Fullname"
            name="full_name"
            placeholder="John Doe"
            register={register("full_name")}
            error={errors?.full_name}
          />
          <InputField
            type="email"
            label="Email"
            name="email"
            placeholder="name@example.com"
            register={register("email")}
            error={errors?.email}
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            placeholder="••••••••"
            register={register("password")}
            error={errors?.password}
          />
          <Button
            type="submit"
            className="w-full bg-darkPrimary hover:bg-buttonHoverDark"
            disabled={!isValid}
          >
            Create account
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4">
        <div className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-darkPrimary hover:underline">
            Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
