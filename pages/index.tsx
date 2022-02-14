import type { NextPage } from 'next'
import Head from 'next/head'
import FullPage from '../components/full-page'
import Presentation from '../components/presentation'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Description" />
      </Head>
      <FullPage>
        <Presentation />
      </FullPage>
      <h1 id="home">Home</h1>
    </>
  )
}

export default Home
