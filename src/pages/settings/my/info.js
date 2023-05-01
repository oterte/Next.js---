import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import styles from '/styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'


export async function getServerSideProps() {
  console.log('서버에서 데이터 보내는중..')
  return {
    props: { },
  }
}
export default function Info() {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = 'initial' } = router.query
  return (
    <>
      <h1 className={styles.title}>Info</h1>
      <h1 className={styles.title}>clicked {String(clicked)}</h1>
      <h1 className={styles.title}>status {status}</h1>
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          location.replace('/settings/my/info?status=editing')
        }}
      >
        edit(replace)
      </button>
      <br/>
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing')
        }}
      >
        edit(push)
      </button>
      <br/>
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing', undefined, {shallow:true})
        }}
      >
        edit(shallow)
      </button>
    </>
  )
}

Info.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
