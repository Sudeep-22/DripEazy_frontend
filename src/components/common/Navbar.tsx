"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-indigo-600">
        DripEazy
      </Link>
      <div className="flex gap-6">
        <Link href="/products">Products</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
      </div>
    </nav>
  );
}