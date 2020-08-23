import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

import Button from 'components/Button'
import { signIn, useSession } from 'next-auth/client'

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

export default ({data}) : JSX.Element => {
  const [ session ] = useSession()

  return (<>
    <Head>
      <title>Index Page</title>
    </Head>

    <div>
      {session && <p>Signed in as {session.user.email}</p>}
      {!session && <p><a href="/api/auth/signin">Sign in</a></p>}

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