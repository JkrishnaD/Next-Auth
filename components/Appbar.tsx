"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { json } from "stream/consumers";
// import { useRouter } from "next/navigation"

export const Appbar = () => {
    const session = useSession(); // to get the details
    return <div className="bg-black h-screen text-white">
        <div className="flex justify-around border-b-0">
            <button onClick={() => {
                signIn()
            }}>SignIn</button>
            <button onClick={() => {
                signOut()
            }}>Logout</button>
        </div>
        <div className="flex justify-center my-2">
            <p>{JSON.stringify(session)}</p>
        </div>
    </div>
}

// export const Appbar = ()=>{
//     const router = useRouter();
//     return <>
//     <button onClick={()=>{
//         router.push("/api/auth/signin")
//     }}>SignIn</button>
//     <button onClick={()=>{
//         router.push("/api/auth/logout")
//     }}>Logout</button>
//     </>
// }