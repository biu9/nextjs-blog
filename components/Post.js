export default function Post({ content,date,title }) {
  return (
    <div className="w-full flex justify-between space-x-6 cursor-pointer hover:scale-110 transform duration-200 font-mono items-center">
      <div className="bg-avatar w-24 h-24 bg-cover rounded-full"></div>
      <div className="w-96 h-20 overflow-hidden">
        <div className="font-bold text-xl">{title}</div>
        <div className="">{content}</div>
      </div>
      <div>{date}</div>
    </div>
  )
}
