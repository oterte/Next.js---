import Layout from '../components/Layout'

// 모든 페이지를 품을 수 있는 구조.
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />)
}
