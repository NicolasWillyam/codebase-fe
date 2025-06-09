import { Button } from "@/presentation/components/ui/button";
import { Card, CardContent } from "@/presentation/components/ui/card";
import { Input } from "@/presentation/components/ui/input";
import { Label } from "@/presentation/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast"; // hoặc dùng `react-hot-toast`
import logo from "/icons/logo.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        data
      );

      const token = res.data?.access_token;

      if (token) {
        localStorage.setItem("accessToken", token);
        toast.success("Registration successful!");
        navigate("/auth/login"); // Navigate to login page after successful registration
      } else {
        toast.error("No token received.");
      }
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Something went wrong";
      toast.error(`Register failed: ${msg}`);
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
              <h2 className="text-2xl font-semibold mt-4">Create an account</h2>
              <p className="text-gray-500 text-sm">
                Fill in the information to register
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your full name"
                  className="h-10"
                />
                {typeof errors.name?.message === "string" && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
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
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
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
                disabled={isSubmitting}
                className="w-full h-10"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </form>

            <p className="text-xs w-4/5 mx-auto text-center text-gray-500">
              By signing up, you agree to the{" "}
              <a href="#" className="underline">
                terms of service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                privacy policy
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
