import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { POST } from '../request'

const LoginModal = ({ open, setOpen }) => {
  const [imgClassIndex, setImgClassIndex] = useState(0)
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })
  const router = useRouter()

  const imgClasses = [
    'translate-x-full z-10',
    '-translate-x-full z-0',
    'translate-x-0 z-20',
  ]
  const imgClassPrefix = 'w-96 absolute transform transition duration-500'

  useEffect(() => {
    const timer = setInterval(() => {
      setImgClassIndex((imgClassIndex) => imgClassIndex + 1)
      console.log(imgClassIndex)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Modal open={open}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 rounded-2xl bg-white outline-none flex space-x-10 font-mono">
        <div className="p-10">
          <div className=" w-96  rounded-xl shadow-xl hover:scale-110 transform duration-200 relative overflow-hidden h-96">
            <img
              className={imgClasses[imgClassIndex % 3] + ' ' + imgClassPrefix}
              src="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/97031695_p0_master1200.jpg"
            />
            <img
              className={
                imgClasses[(imgClassIndex + 1) % 3] + ' ' + imgClassPrefix
              }
              src="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/80278148_p0.jpg"
            />
            <img
              className={
                imgClasses[(imgClassIndex + 2) % 3] + ' ' + imgClassPrefix
              }
              src="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p2.jpg"
            />
          </div>
          <div className="flex justify-center space-x-3 mt-10">
            {[0, 0, 0].map((item, index) => {
              if (index !== imgClassIndex % 3) {
                return (
                  <div
                    key={index}
                    className="w-12 h-4 rounded-full border-2 border-gray-200"
                  ></div>
                )
              } else {
                return (
                  <div
                    key={index}
                    className="w-12 h-4 rounded-full border-2 border-gray-200 bg-gradient-to-br from-white via-indigo-100 to-pink-200"
                  ></div>
                )
              }
            })}
          </div>
        </div>
        <div className="w-96 p-10 flex flex-col space-y-6">
          <div className="font-bold text-3xl mb-5">LOG IN </div>
          <TextField
            onChange={(e) => {
              setLoginForm({
                ...loginForm,
                username: e.target.value,
              })
            }}
            label="username"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setLoginForm({
                ...loginForm,
                password: e.target.value,
              })
            }}
            label="password"
            variant="standard"
          />
          <div className="flex justify-between pt-5">
            <Button onClick={() => setOpen(false)} variant="text" color="error">
              cancel
            </Button>
            <Button
              onClick={() => {
                POST({
                  url: '/api/user/login',
                  body: loginForm,
                }).then((res) => {
                  if (res.data instanceof Array && res.data.length > 0) {
                    if(typeof window !== 'undefined'){
                      window.localStorage.setItem('user', JSON.stringify({
                        username: res.data[0].username,
                        id: res.data[0].id,
                      }));
                    }
                    setOpen(false)
                    router.push('/admin')
                  }
                })
              }}
              variant="text"
            >
              log in
            </Button>
          </div>
          <div className="w-full text-center pt-16">
            {' '}
            or you can sign in with
          </div>
          <div className="flex justify-center space-x-6">
            <div className="bg-github w-8 h-8 bg-cover"></div>
            <div className="bg-email w-8 h-8 bg-cover"></div>
            <div className="bg-QQ w-8 h-8 bg-cover"></div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export const NavBar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [ifLogged, setIfLogged] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if(window.localStorage.getItem('user')){
      setIfLogged(true)
    }
  },[])

  return (
    <div className="flex justify-between font-bold font-mono text-gray-600 items-center mb-40 space-x-40">
      <LoginModal open={openLoginModal} setOpen={setOpenLoginModal} />
      <div 
      onClick={() => {
        router.push('/')
      }}
      className="text-5xl cursor-pointer">DAS</div>
      <div className="flex space-x-10 text-2xl">
        <div>blogs</div>
        <div>projects</div>
        <div>about</div>
      </div>
      {ifLogged ? (
        <div
          onClick={() => {
            router.push('/admin')
          }}
          className="text-3xl flex justify-center items-center whitespace-nowrap cursor-pointer"
        >
          logged
          <div className="bg-signIn w-10 h-10 bg-cover mx-5"></div>
        </div>
      ) : (
        <div
          onClick={() => setOpenLoginModal(true)}
          className="text-3xl flex justify-center items-center whitespace-nowrap cursor-pointer"
        >
          log in
          <div className="bg-signIn w-10 h-10 bg-cover mx-5"></div>
        </div>
      )}
    </div>
  )
}
