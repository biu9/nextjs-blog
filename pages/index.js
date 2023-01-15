import Post from "../components/Post"

export async function getServerSideProps(context) {
  const data = {
    name: 'John Doe',
  }

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data,
    },
  }
}

const NavBar = () => {
  return (
    <div className="flex justify-between font-bold font-mono text-gray-600 items-center mb-40 space-x-40">
      <div className="text-5xl">DAS</div>
      <div className="flex space-x-10 text-2xl">
        <div>blogs</div>
        <div>projects</div>
        <div>about</div>
      </div>
      <div className="text-3xl flex justify-center items-center whitespace-nowrap">
        sign in
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

const RecentPosts = () => {
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
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

const MostReadPosts = () => {
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
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

const BlogTypes = () => {
  return (
    <div>
      <div className="text-5xl font-bold font-mono mb-8">Blog Types</div>
      <div className="flex  w-96 flex-wrap justify-start">
        <BlogType text="React"/>
        <BlogType text="Node"/>
        <BlogType text="Next"/>
        <BlogType text="MaterialUI"/>
        <BlogType text="TailwindCSS"/>
        <BlogType text="TypeScript"/>
        <BlogType text="JavaScript"/>
        <BlogType text="CSS"/>
        <BlogType text="HTML"/>
        <BlogType text="Git"/>
        <BlogType text="Linux"/>
        <BlogType text="MongoDB"/>
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
  return (
    <div className="bg-gradient-to-br from-white via-indigo-100 to-pink-200 w-full min-h-screen px-40 py-10 min-w-max">
      <NavBar/>
      <div className="flex justify-between space-x-80 mb-40">
        <div className="flex flex-col space-y-40">
          <Logo/>
          <RecentPosts/>
        </div>
        <div className="flex flex-col space-y-40">
          <Intro/>
          <MostReadPosts/>
          <BlogTypes/>
        </div>
      </div>
    </div>
  )
}
