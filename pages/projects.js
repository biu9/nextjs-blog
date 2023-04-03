import { NavBar } from "../components/NavBar"

const Project = () => {
    return (
        <div className="flex flex-col space-y-6 font-mono">
            <div className="w-1/3 object-cover rounded-2xl overflow-hidden">
                <img 
                className="w-full object-cover hover:scale-150 transition duration-500"
                src="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/%E6%9C%AA%E6%A0%87%E9%A2%98-15.jpg">
                </img>
            </div>
            <div className="p-3 border-2 rounded-2xl border-black w-1/3">
                <div className="font-bold text-3xl mb-5">Projec1</div>
                <div>the desription of this project</div>
            </div>
        </div>
    )
}

export default function Projects () {
    return (
        <div className="bg-gradient-to-br from-white via-indigo-100 to-pink-200 min-h-screen px-40 py-10  flex flex-col min-w-max">
            <NavBar/>
            <div className="w-full flex flex-wrap">
            </div>
        </div>
    )
}