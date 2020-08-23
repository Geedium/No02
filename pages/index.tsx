import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

import Button from 'components/Button'
import { signIn, useSession } from 'next-auth/client'

export const getServerSideProps = async () : Promise<any> => {
  var apiURL = '';

  if(process.env.VERCEL_URL != null) {
    apiURL = process.env.VERCEL_URL + '/api/notes';
  } else {
    apiURL = 'http://85.232.131.161:3000/api/notes';
  }
  const res = await fetch(apiURL);
  const { data, success } = await res.json()

  console.log(success)

  return {
    props: {
      data,
    },
  }
}

const App = ({data}) : JSX.Element => {
  const [ session ] = useSession()

  return (<>
    <Head>
      <title>Index Page</title>
    </Head>

    <div>
      {session && <p>Signed in as {session.user.email}<br/><a href="/api/auth/signout">Sign out</a></p>}
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

export default App;