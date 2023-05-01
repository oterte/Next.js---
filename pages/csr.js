import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';




export default function CSR() {
    const [time, setTime] = useState();
    useEffect(() => {
        setTime(new Date().toISOString())
    },[])
  return (
      <>
        <h1 className={styles.title}>
        {time}
        </h1>
      </>
  )
}

CSR.getLayout = function getLayout(page) {
  return(
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}