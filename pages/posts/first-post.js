import {useSession} from "next-auth/react";

export default function FirstPost() {
    const { data: session, status } = useSession();
    const { user } = session || {}
    const {name} =  user || {}
    console.log(session)
    return <h1>First Post : {name}</h1>;
}