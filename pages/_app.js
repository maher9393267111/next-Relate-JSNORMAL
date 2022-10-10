import '../styles/globals.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Script from 'next/script';
import Link from 'next/link';
function MyApp({ Component, pageProps }) {
  return (
    <>  

{/* <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
     

      <link rel="stylesheet" href="/assets/css/vendor/font-awesome.min.css"/>
    <link rel="stylesheet" href="/assets/css/vendor/plaza-icon.css"/>
    <link rel="stylesheet" href="/assets/css/vendor/jquery-ui.min.css"/>

    <link rel="stylesheet" href="/assets/css/plugins/slick.css"/>
    <link rel="stylesheet" href="/assets/css/plugins/animate.min.css"/>
    <link rel="stylesheet" href="/assets/css/plugins/aos.min.css"/>
    <link rel="stylesheet" href="/assets/css/plugins/nice-select.css"/>
    <link rel="stylesheet" href="/assets/css/plugins/venobox.min.css"/>

    <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>

  
    
   
   
    <Script src={"/assets/js/vendor/jquery-ui.min.js"}/>

  
    <Script src={"/assets/js/plugins/slick.min.js"}/>
    <Script src={"/assets/js/plugins/material-scrolltop.js"}/>
    <Script src={"/assets/js/plugins/jquery.nice-select.min.js"}/>
    <Script src={"/assets/js/plugins/jquery.zoom.min.js"}/>
    <Script src={"/assets/js/plugins/venobox.min.js"}/>
    <Script src={"/assets/js/plugins/aos.min.js"}/>
    <Script src={"/assets/js/plugins/ajax-mail.js"}/>


    <Script src={'/assets/js/vendor/modernizr-3.11.2.min.js'}/>
    <Script src={"/assets/js/vendor/jquery-3.6.0.min.js"}/>
    <Script src={"/assets/js/vendor/jquery-migrate-3.3.2.min.js"}/>
    <Script src={"/assets/js/vendor/bootstrap.bundle.min.js"}/>
   

  
    
   
   
  




      <title>Mini Social Media</title>
    </Head>
  </> */}


    <ToastContainer position="top-center" />

    <Component {...pageProps} />
    </>
  )

}

export default MyApp
