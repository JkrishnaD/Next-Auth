import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/route";

export default async function () {
    const session = await getServerSession(NEXT_AUTH);
    return <>
        <Appbar />
        {JSON.stringify(session)}
    </>
} 