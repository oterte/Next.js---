import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';
import styles from '../styles/Home.module.css';
export async function getStaticProps(){
  console.log("서버에서 데이터 보내는중..")
  return {
    props:{time: new Date().toISOString()}
  }
}


export default function SSG({time}) {
   
  return (
      <>
        <h1 className={styles.title}>
        {time}
        </h1>
      </>
  )
}

SSG.getLayout = function getLayout(page) {
  return(
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}