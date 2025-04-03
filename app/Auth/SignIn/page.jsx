"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosBook } from "react-icons/io";
// import { BookOpen } from "lucide-react";
// import { useToast } from "@/hooks/use-toast"; // Uncommented for toast notifications

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const { toast } = useToast(); // Uncommented for toast notifications

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate authentication
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Sign in successful",
                description: "Welcome back to BookHaven!",
            });
        }, 1500);
    };

    return (
        <div className="flex h-[80vh]  flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
                {/* Header Section */}
                <div className="text-center">

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                        <Link href="/" className="flex items-center justify-center ">
                            <IoIosBook className="text-4xl md:text-3xl text-purple-800 transition-transform hover:scale-110" />
                        </Link>
                        Sign in to BookCompass
                    </h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Welcome back, we missed you!
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4 rounded-md">
                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-700"
                            >
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-slate-700"
                                >
                                    Password
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-slate-800 px-4 py-3 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing in..." : "Sign in"}
                    </button>

                    {/* Register Link */}
                    <div className="text-center text-sm">
                        <span className="text-slate-600">Don't have an account?</span>{" "}
                        <Link
                            href="/Auth/Register"
                            className="font-medium text-slate-800 hover:text-slate-900 transition-colors"
                        >
                            Register now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}