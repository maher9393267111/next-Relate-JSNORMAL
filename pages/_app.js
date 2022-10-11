import '../styles/globals.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Script from 'next/script';
import Link from 'next/link';
import {useEffect,useState} from 'react'
function MyApp({ Component, pageProps }) {

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);  




  return (
    <>  



    <ToastContainer position="top-center" />

    <Component {...pageProps} />
    </>
  )

}

export default MyApp
