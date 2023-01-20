import { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { POST } from '../request'

export default function Admin() {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    author: '',
    date: '',
    userId: '',
    id: '',
    type: '',
  })

  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      blog.userId = user.id
      blog.author = user.username
    }
  }

  return (
    <div className="font-mono bg-gradient-to-br from-white via-indigo-100 to-pink-200 w-full min-h-screen px-40 py-10 min-w-max">
      <NavBar />
      <div className="flex flex-col space-y-6">
        <div className="text-3xl font-bold">upload your blog</div>
        <div className="w-96 flex flex-col">
          <TextField
            onChange={(e) => {
              setBlog({
                ...blog,
                title: e.target.value,
              })
            }}
            label="title"
            variant="standard"
          />{' '}
          <TextField
            onChange={(e) => {
              setBlog({
                ...blog,
                date: e.target.value,
              })
            }}
            label="date"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setBlog({
                ...blog,
                type: e.target.value,
              })
            }}
            label="type"
            variant="standard"
          />
          <textarea
            placeholder='content'
            className="w-full h-96 border-2 border-gray-200 rounded-md p-2 outline-none my-10"
            onChange={(e) => {
              setBlog({
                ...blog,
                content: e.target.value,
              })
            }}
          />
        </div>
        <div className="w-96 flex justify-between">
          <Button variant="text" color="error">
            cancel
          </Button>
          <Button
            onClick={() => {
              console.log('blog: ', blog)
              setBlog({
                ...blog,
                id: new Date().getTime(),
              })
              POST({
                url: '/api/blog/add',
                body: blog,
              }).then((res) => {
                if(res.message === 'success')
                  alert('upload success')
                else
                  alert('upload failed', res.message)
                console.log('upload res: ', res)
              })
            }}
            variant="text"
          >
            upload
          </Button>
        </div>
      </div>
    </div>
  )
}
