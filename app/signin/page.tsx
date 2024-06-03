"use client"

import { signIn } from "next-auth/react"

export default function () {
    return (
        <>
            <button onClick={async () => {
                await signIn("google")
            }}>Login with Google</button>
            <button onClick={async () => {
                await signIn("github")
            }}>Login with Github</button>
        </>
    )
}