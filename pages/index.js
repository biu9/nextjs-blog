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

export default function Home({ data }) {
    console.log('data', data);
  return (
    <div className="bg-red-200">
      123123
    </div>
  )
}
