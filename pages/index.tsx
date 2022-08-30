import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Doodling random bs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Playground
        </h1>
        <p className={styles.description}>
          Posting random doodles in here
        </p>
        <div className={styles.grid}>
          <a href="./threejs" className={styles.card}>
            <h2>Threejs</h2>
            <p>Messing around with Three.js</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Nothing</h2>
            <p>This is a dummy link</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Nothing</h2>
            <p>This is a dummy link</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Nothing</h2>
            <p>This is a dummy link</p>
          </a>
         </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://pabich.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my portfolio  
        </a>
      </footer>
    </div>
  )
}

export default Home
