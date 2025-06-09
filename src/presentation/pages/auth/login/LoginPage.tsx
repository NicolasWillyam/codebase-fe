import { Button } from "@/presentation/components/ui/button";

import { Input } from "@/presentation/components/ui/input";
import { Label } from "@/presentation/components/ui/label";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { useForm } from "react-hook-form";
import logo from "/icons/logo.jpeg";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/presentation/components/ui/card";
// import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/auth/login", {
        email: data.email,
        password: data.password,
      });

      const token = res.data?.accessToken; // ✅ Đúng key
      const user = res.data?.user;

      if (token && user) {
        localStorage.setItem("accessToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Login failed: No token received.");
      }
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || "Login failed. Please try again.";
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/login_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <Card className="w-full max-w-md rounded-2xl bg-white shadow-lg px-4 py-8">
          <CardContent className="space-y-6">
            <div className="text-center">
              <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 mx-auto mb-2 rounded-xl"
              />
              <h2 className="text-2xl font-semibold mt-4">
                Log in to your account
              </h2>
              <p className="text-gray-500 text-sm">
                Choose a convenient sign-in method
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Enter your email"
                  className="h-10"
                />

                {typeof errors.email?.message === "string" && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Enter your password"
                  className="h-10"
                />
                {typeof errors.password?.message === "string" && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-10"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                className="w-full h-10 flex items-center"
              >
                <FaGoogle />
              </Button>
              <Button
                variant="outline"
                className="w-full h-10 flex items-center"
              >
                <FaFacebookF />
              </Button>
              <Button
                variant="outline"
                className="w-full h-10 flex items-center"
              >
                <FaApple />
              </Button>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <a
                  href="/auth/register"
                  className="text-blue-500 underline underline-offset-2"
                >
                  Sign up
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
