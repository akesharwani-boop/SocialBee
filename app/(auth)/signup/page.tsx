"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, Github } from "lucide-react";
import toast from "react-hot-toast";
import { signupSchema } from "@/validation/signup.schema";
import { FormError } from "@/components/ui/form-error";
import { useSignup } from "@/hooks/useSignup";
export default function SignupPage() {
  const{mutate,isPending}= useSignup()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
    },
    validationSchema: signupSchema,
   
    onSubmit:  (values) => {
      
      mutate({
        ...values,
        age:Number(values.age)
      })
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
            <p className="text-gray-500 text-sm">Social Media App</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label>firstName</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  name="firstName"
                  placeholder="John "
                  className="pl-10"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
              </div>
              <FormError
                touched={formik.touched.firstName}
                error={formik.errors.firstName}
              />
            </div>

            <div className="space-y-2">
              <Label>lastName</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  name="lastName"
                  placeholder=" Doe"
                  className="pl-10"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
              </div>
              <FormError
                touched={formik.touched.lastName}
                error={formik.errors.lastName}
              />
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
              <FormError
                touched={formik.touched.email}
                error={formik.errors.email}
              />
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
              <FormError
                touched={formik.touched.password}
                error={formik.errors.password}
              />
            </div>
            <div className="space-y-2">
              <Label>age</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="number"
                  name="age"
                  placeholder="write your age ..."
                  className="pl-10"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.age}
                />
              </div>
              <FormError
                touched={formik.touched.age}
                error={formik.errors.age}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Sign Up
              {isPending ? "Creating Account" : ""}
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
