import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../src/components/header/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Serempre ToDo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className={styles.tasks}>
      </div>
    </div>
  )
}
