import Layout from '../components/Layout';
import '../styles/globals.css';
import SideBar from '../components/SideBar';
export default function app({ Component, pageProps }) {
  return (
    <Layout>
      <SideBar />
      <Component {...pageProps} />
    </Layout>
  );
}
