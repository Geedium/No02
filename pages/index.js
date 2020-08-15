import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes')
  const { data, success } = await res.json()

  console.log(success)

  return {
    props: {
      data,
    },
  }
}

function App({data}) {
  return (<>
    <Head>
      <title>Index Page</title>
    </Head>

    <div>
      {data.map(note => {
        return (
          <div key={note._id}>
            <div>{note.title}</div>
            <div>{note.description}</div>
          </div>
        )
      })}
    </div>
  </>)
}

export default App