import {useMutation} from "@tanstack/react-query"
import { signupUser } from "@/service/auth.service"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


export const useSignup =()=>{
    const router = useRouter()
    return useMutation({
        mutationFn :signupUser,

        onSuccess : ()=>{
            toast.success("Signup Successful 🎉")
            router.push('/login')
        },
     onError:()=>{
        toast.error("sorry signup has been failed")
     }

    })
}

// simple logic isme service call huye useMutation chalega normal success error handle hogi aur agar
// success hua toh redirect to login  