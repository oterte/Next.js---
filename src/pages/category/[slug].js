import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import styles from '/styles/Home.module.css'
import { useRouter } from 'next/router'

export default function CategorySlug() {
  const router = useRouter();
  const {slug, from, age} = router.query
  console.log(slug, from, age)
  return (
    <>
      <h1 className={styles.title}>{slug} {from} {age}</h1>
    </>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
