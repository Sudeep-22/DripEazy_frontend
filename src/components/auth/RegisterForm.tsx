"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterSchemaType = z.infer<typeof registerSchema>;


export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Register data:", data);
    // TODO: integrate with NextAuth or GraphQL API
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md p-6 bg-white rounded shadow"
    >
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <input
        type="text"
        placeholder="Name"
        {...register("name")}
        className="w-full p-2 border rounded mb-1"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>
      )}

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="w-full p-2 border rounded mb-1"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="w-full p-2 border rounded mb-1"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
      )}

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
        className="w-full p-2 border rounded mb-1"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm mb-2">
          {errors.confirmPassword.message}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Register
      </button>
    </form>
  );
}
