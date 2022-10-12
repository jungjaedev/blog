import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>practice Next</title>
        <meta name="description" content="next pratice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1 className="text-3xl font-bold underline">
      Home
      </h1>
    </Layout>
  )
}

export default Home
