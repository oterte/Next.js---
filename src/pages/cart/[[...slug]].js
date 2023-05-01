import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function CartDateSlug() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <h1 className={styles.title}>CartDateSlug {JSON.stringify(slug)}</h1>
      <Link href = "/cart/2022/06/05">2022년 6월 5일</Link>
      <br/>
      <button onClick={() => router.push("/cart/2022/06/24")}>2022년 6월 24일로</button>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
