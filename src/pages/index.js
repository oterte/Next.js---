import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'

export async function getServerSideProps() {
  console.log('서버에서 데이터 보내는중..')
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <h1>
        <Link href="/csr">
          <p>CSR로</p>
        </Link>
      </h1>
      <h1>
        <Link href="/ssg">
          <p>SSG로</p>
        </Link>
      </h1>
      <h1>
        <Link href="/isr">
          <p>ISR로</p>
        </Link>
      </h1>
    </>
  )
}
