import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import requests from '../utils/requests'
import Results from '../components/Results'

export default function Home({ results }) {
  console.log(results);
  return (
    <div >
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <div className=''>
        <Header />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Results */}
      <Results results={results} />

    </div>

  )
}
// type HomeProps = {
//   req: {}[]
// }

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const res = await fetch(`
  https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  )
  const data = await res.json()
  return {
    props: { results: data.results }
  }
}