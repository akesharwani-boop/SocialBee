'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "../button"
export default function Navbar() {

    return (
        <div className="flex  h-20 justify-around items-center dark:bg-gray-100">
         <div>
            <span>Auth app</span>
         </div>
         <div className="flex gap-5 items-center">
            <Link href="/"> Hey web
            </Link>
            <Link href="/login">
             <Button className="cursor-pointer "  variant={"outline"}>Login</Button>
            </Link>
           <Link href="/signup">
           <Button  className="cursor-pointer" variant={"outline"}>Signup</Button>
           </Link>
           
         </div>
        </div>
    )
}