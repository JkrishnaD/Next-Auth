import { NEXT_AUTH } from "@/app/lib/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
    const session = await getServerSession(NEXT_AUTH);
    return NextResponse.json({
        session
    })
}