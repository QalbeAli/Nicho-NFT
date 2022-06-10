import { Container } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Collection from '../components/Collection'
import Header from '../components/Header/Index'
import Hero from '../components/Hero/Index'
import Partner from '../components/Partner'
import Video from '../components/Video'
import Create from '../components/Create'
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nicho NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Hero />
        <Video />
      </Container>
      <Collection />
      <Partner />
      <Create />
      <Footer />
    </div>
  )
}

export default Home
