import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
import Hero from '../Components/Elements/Hero'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
       <Header />
      </Head>

      <main className={styles.main}>
        <Hero />
      </main>

      <footer className={styles.footer}>
       <Footer />
      </footer>
    </div>
  )
}
