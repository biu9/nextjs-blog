import { Drawer } from '@mui/material'
import { useState,useEffect } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css';
var Markdown = require('react-remarkable');

export default function Post({ content, date, title }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 配置 highlight.js
    hljs.configure({
        // 忽略未经转义的 HTML 字符
        ignoreUnescapedHTML: true
    })
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll('pre code')
    codes.forEach((el) => {
        // 让code进行高亮
        hljs.highlightElement(el)
    })
  }, []);

  const handleCilck = () => {
    setOpen(true)
  }

  const handleClose = (event) => {
    setOpen(false)
  }

  return (
    <div>
      <div
        onClick={handleCilck}
        className="w-full flex justify-between space-x-6 cursor-pointer hover:scale-110 transform duration-200 font-mono items-center"
      >
        <div className="bg-avatar w-24 h-24 bg-cover rounded-full"></div>
        <div className="w-96 h-20 overflow-hidden">
          <div className="font-bold text-xl">{title}</div>
          <div className="">{content}</div>
        </div>
        <div>{date}</div>
      </div>
      <Drawer 
      anchor="right" 
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
            width: 1/2
        }
      }}
      >
        <div
        className='px-32 py-16 font-mono flex flex-col w-full'
        >
          <div className='flex items-center space-x-6'>
            <div className='bg-avatar w-32 h-32 bg-cover rounded-full'></div>
            <div>
              <div className='text-4xl font-bold'>{title}</div>
              <div className='text-xl'>{date}</div>
            </div>
          </div>
          <div className=' prose-lg mt-10 w-full'>
            <Markdown>
              {content}
            </Markdown>
          </div>
        </div>
      </Drawer>
    </div>
  )
}
