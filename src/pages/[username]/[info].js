import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import styles from '/styles/Home.module.css'
import { useRouter } from 'next/router'

export default function UsernameInfo() {
  const router = useRouter();
  const {username, info} = router.query

  console.log(username, info)
  return (
    <>
      <h1 className={styles.title}>{username}'s {info}</h1>
      {/* jimmy's name */}
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
