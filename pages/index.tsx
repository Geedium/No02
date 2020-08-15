import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

export const getServerSideProps = async () : Promise<any> => {
  const res = await fetch('http://localhost:3000/api/notes')
  const { data, success } = await res.json()

  console.log(success)

  return {
    props: {
      data,
    },
  }
}

export default function App({data}) : JSX.Element {
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