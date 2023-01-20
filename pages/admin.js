import { useState } from "react"
import { NavBar } from "../components/NavBar";

export default function Admin() {
    const [blog, setBlog] = useState({
        title: "",
        content: "",
        author: "",
        date: new Date().getTime(),
        userId:"",
        id: "",
        type:""
    });

    return (
        <div className="bg-gradient-to-br from-white via-indigo-100 to-pink-200 w-full min-h-screen px-40 py-10 min-w-max">
            <NavBar/>
            admin page
        </div>
    )
}