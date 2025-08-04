
import type { AppProps } from 'next/app';
import "@/app/globals.css";
import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Footer';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Topbar/>
   <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
