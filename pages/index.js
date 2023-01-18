import Post from "../components/Post";
import { POST,GET } from '../request/index';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useEffect } from "react";
import { useRouter } from "next/router";

const requestBlogType = {
  'recentPosts':1,
  'popularPosts':2,
}

export async function getServerSideProps(context) {

  const recentPosts = await POST({
    url:'/api/blog/get',
    body:{
      type:requestBlogType.recentPosts,
    }
  });

  const popularPosts = await POST({
    url:'/api/blog/get',
    body:{
      type:requestBlogType.popularPosts,
    }
  });

  const types = await POST({
    url:'/api/types/get',
    body:{}
  });

  const data = {
    recentPosts,
    popularPosts,
    types,
  }

  return {
    props: {
      data,
    },
  }
}

const LoginModal = ({ open,setOpen }) => {
  const [imgClassIndex,setImgClassIndex] = useState(0);
  const [loginForm,setLoginForm] = useState({
    username:'',
    password:'',
  });
  const router = useRouter();

  const imgClasses = ['translate-x-full z-10','-translate-x-full z-0','translate-x-0 z-20'];
  const imgClassPrefix = 'w-96 absolute transform transition duration-500';

  useEffect(() => {
    const timer = setInterval(() => {
      setImgClassIndex(imgClassIndex => imgClassIndex+1);
      console.log(imgClassIndex);
    },3000);
    return () => clearInterval(timer);
  },[]);
  
  return (
      <Modal
      open={open}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 rounded-2xl bg-white outline-none flex space-x-10 font-mono">
          <div className="p-10">
            <div className=" w-96  rounded-xl shadow-xl hover:scale-110 transform duration-200 relative overflow-hidden h-96">                           
              <img 
              className={imgClasses[imgClassIndex % 3]+ ' ' + imgClassPrefix}
              src="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/97031695_p0_master1200.jpg"/>
              <img 
              className={imgClasses[(imgClassIndex+1) % 3]+ ' ' + imgClassPrefix}
              src="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/80278148_p0.jpg"/>
              <img 
              className={imgClasses[(imgClassIndex+2) % 3]+ ' ' + imgClassPrefix}
              src="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p2.jpg"/>
            </div>
            <div className="flex justify-center space-x-3 mt-10">
              {
                [0,0,0].map((item,index) => {
                  if(index !== imgClassIndex % 3) {
                    return (
                      <div key={index} className="w-12 h-4 rounded-full border-2 border-gray-200">
                      </div>
                    )
                  } else {
                    return (
                      <div key={index} className="w-12 h-4 rounded-full border-2 border-gray-200 bg-gradient-to-br from-white via-indigo-100 to-pink-200">
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
          <div className="w-96 p-10 flex flex-col space-y-6">
            <div className="font-bold text-3xl mb-5">LOG IN </div>
            <TextField  
            onChange={(e) => {
              setLoginForm({
                ...loginForm,
                username:e.target.value,
              })
            }}
            label="username" variant="standard" />
            <TextField  
            onChange={(e) => {
              setLoginForm({
                ...loginForm,
                password:e.target.value,
              })
            }}
            label="password" variant="standard" />
            <div className="flex justify-between pt-5">
              <Button 
              onClick={() => setOpen(false)}
              variant="text" color="error">cancel</Button>
              <Button 
              onClick={() => {
                POST({
                  url:'/api/user/login',
                  body:loginForm,
                }).then(res => {
                  if(res.data instanceof Array && res.data.length > 0) {
                    setOpen(false);
                    router.push('/admin');
                  }
                })
              }}
              variant="text">log in</Button>
            </div>
            <div className="w-full text-center pt-16"> or you can sign in with</div>
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

const NavBar = () => {
  const [openLoginModal,setOpenLoginModal] = useState(false);

  return (
    <div className="flex justify-between font-bold font-mono text-gray-600 items-center mb-40 space-x-40">
      <LoginModal open={openLoginModal} setOpen={setOpenLoginModal}/>
      <div className="text-5xl">DAS</div>
      <div className="flex space-x-10 text-2xl">
        <div>blogs</div>
        <div>projects</div>
        <div>about</div>
      </div>
      <div 
      onClick={() => setOpenLoginModal(true)}
      className="text-3xl flex justify-center items-center whitespace-nowrap cursor-pointer">
        log in
        <div className="bg-signIn w-10 h-10 bg-cover mx-5"></div>
      </div>
    </div>
  )
}

const Logo = () => {
  return (
    <div className="flex flex-col text-white font-mono text-9xl shadow-2xl p-10 rounded-3xl">
      <div>#DIGITAL</div>
      <div>ART</div>
      <div>SPACE</div>
      <div className="text-lg flex items-center space-x-3 text-black my-5">
        <div>by</div>
        <div className="bg-avatar w-10 h-10 bg-cover rounded-full"></div>
        <div>thy</div>
      </div>
      <div className="text-lg flex space-x-10">
          <a href="https://github.com/biu9"  className="bg-github w-10 h-10 bg-cover cursor-pointer"/>
        <div className="bg-email w-10 h-10 bg-cover cursor-pointer"></div>
        <div className="bg-QQ w-10 h-10 bg-cover cursor-pointer"></div>
      </div>
    </div>
  )
}

const Intro = () => {
  return (
    <div className=" relative shadow-2xl rounded-3xl p-10">
      <div className="w-full font-mono">
        <div className="text-4xl font-bold mb-10">Intro</div>
        <div>
          <p>
          👋 Hi, I’m thy，a student studying in ZheJiang university
          </p>
          <p>
          👀 I’m interested in web development
          </p>
          <p>
          🌱 I’m currently learning React and Typescript
          </p>
          <p>
          💞️ I’m looking to collaborate on develop a awesome web site
          </p>
          <p>
          📫 How to reach me: 1756127061@qq.com
          </p>
        </div>
        <div className="mt-5">
          here is my blog site, you can find my blogs here
          <p>support by</p>
          <div className="flex my-1 space-x-5 items-center justify-between">
            <a className="bg-nextjs w-28 h-16 bg-cover cursor-pointer" href="https://nextjs.org/"></a>
            <a className="bg-node w-20 h-16 bg-cover cursor-pointer" href="https://nodejs.org/en/"></a>
            <a className="bg-materialUi w-16 h-16 bg-cover cursor-pointer" href="https://material-ui.com/"></a>
            <a className="bg-tailwindcss w-16 h-16 bg-cover cursor-pointer" href="https://tailwindcss.com/"></a>
          </div>
        </div>
        
      </div>
      <div className=" bg-white  w-32 h-32 rounded-full absolute right-0 top-1/2 shadow-xl bg-opacity-60 transform -translate-y-1/2 flex justify-center items-center font-mono flex-col space-y-2 cursor-pointer translate-x-1/2">
        <div className="bg-explore w-8 h-8 bg-cover"></div>
        <div>explore</div>
      </div>
    </div>
  )
}

const RecentPosts = ({ posts }) => {
  return (
    <div className="">
      <div className="flex flex-col space-y-6 mb-10">
        <div className="text-5xl font-bold font-mono">Recent Posts</div>
        <div className="flex justify-between font-mono text-xl">
          <div className="">Author</div>
          <div className="">Content</div>
          <div className="">Date</div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 min-w-96">
        {
          posts.data instanceof Array && posts.data.map((post,index) => {
            return (
              <Post key={index} content={post.content} date={post.time} title={post.title}/>
            )
          })
        }
      </div>
    </div>
  )
}

const MostReadPosts = ({ posts }) => {
  return (
    <div className="">
      <div className="flex flex-col space-y-6 mb-10">
        <div className="text-5xl font-bold font-mono">Most Read Posts</div>
        <div className="flex justify-between font-mono text-xl">
          <div className="">Author</div>
          <div className="">Content</div>
          <div className="">Date</div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 min-w-96">
      {
          posts.data instanceof Array && posts.data.map((post,index) => {
            return (
              <Post key={index} content={post.content} date={post.time} title={post.title}/>
            )
          })
        }
      </div>
    </div>
  )
}

const BlogTypes = ({ types }) => {
  return (
    <div>
      <div className="text-5xl font-bold font-mono mb-8">Blog Types</div>
      <div className="flex  w-96 flex-wrap justify-start">
        {
          types.data instanceof Array && types.data.map((type,index) => {
            return (
              <BlogType key={index} text={type.name}/>
            )
          })
        }
      </div>
    </div>
  )
}

const BlogType = ({ text }) => {
  return (
    <div className="font-mono  p-5 rounded-xl flex-1 mr-6 cursor-pointer shadow-lg hover:scale-110 transform duration-200 flex justify-center items-center">
      {text}
    </div>
  )
}

export default function Home({ data }) {

  console.log('data is ', data);

  return (
    <div className="bg-gradient-to-br from-white via-indigo-100 to-pink-200 w-full min-h-screen px-40 py-10 min-w-max">
      <NavBar/>
      <div className="flex justify-between space-x-80 mb-40">
        <div className="flex flex-col space-y-40">
          <Logo/>
          <RecentPosts posts={data.recentPosts}/>
        </div>
        <div className="flex flex-col space-y-40">
          <Intro/>
          <MostReadPosts posts={data.popularPosts}/>
          <BlogTypes types={data.types} />
        </div>
      </div>
    </div>
  )
}
