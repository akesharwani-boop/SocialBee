"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, Github } from "lucide-react";
import toast from "react-hot-toast";

export default function SignupPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        console.log(values);
        toast.success("Account Created Successfully 🎉");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      <Card className="w-full max-w-md bg-white border border-green-100 shadow-lg rounded-2xl">
        <CardContent className="p-8 space-y-6">
        
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-green-600">
              Create Your Account
            </h1>
            <p className="text-gray-500 text-sm">Aditi Social Media App</p>
          </div>

        
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            
            <div className="space-y-2">
              <Label>Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="pl-10"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs">{formik.errors.name}</p>
              )}
            </div>

           
            <div className="space-y-2">
              <Label>Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="pl-10"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs">{formik.errors.email}</p>
              )}
            </div>

            
            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="pl-10"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs">{formik.errors.password}</p>
              )}
            </div>

           
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Sign Up
            </Button>

            
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-green-100" />
              <span className="text-xs text-gray-400">OR</span>
              <div className="h-px flex-1 bg-green-100" />
            </div>

         
            <Button
              type="button"
              variant="outline"
              className="w-full border-green-200 text-green-700 hover:bg-green-50"
              onClick={() => toast("Continue with Google")}
            >
              Continue with Google
            </Button>

            
            <Button
              type="button"
              variant="outline"
              className="w-full border-green-200 text-green-700 hover:bg-green-50 flex items-center gap-2"
              onClick={() => toast("Continue with GitHub")}
            >
              <Github className="h-4 w-4" />
              Continue with GitHub
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
