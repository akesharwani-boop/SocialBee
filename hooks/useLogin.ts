import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // token store
      localStorage.setItem("access-token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);

      toast.success("Login successful");
      router.push("/dashboard");
    },

    onError: () => {
      toast.error("invalid credentials");
    },
  });
};
