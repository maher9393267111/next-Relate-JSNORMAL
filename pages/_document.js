/* eslint-disable @next/next/no-sync-scripts */
// pages/_document.js
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
      

    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />


    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,400i,500,500i,600,700,800,900" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,500,600,700" rel="stylesheet"/>

  
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    
    <link href="assets/css/headroom.css" rel="stylesheet" />
  
    <link href="assets/css/animate.css" rel="stylesheet" />
 
    <link href="assets/css/ionicons.css" rel="stylesheet" />
  
    <link href="assets/css/material-design-iconic-font.css" rel="stylesheet" />
   
    <link href="assets/css/elegant-icons.css" rel="stylesheet" />

    <link href="assets/css/font-awesome.min.css" rel="stylesheet" />

    <link href="assets/css/swiper.min.css" rel="stylesheet" />
   
    <link href="assets/css/fancybox.min.css" rel="stylesheet" />
   
    <link href="assets/css/slicknav.css" rel="stylesheet" />

   
    <link href="assets/css/style.css" rel="stylesheet" />

  
    
   
   
    <script src="assets/js/modernizr.js"></script>

<script src="assets/js/jquery-main.js"></script>

<script src="assets/js/jquery-migrate.js"></script>

<script src="assets/js/popper.min.js"></script>

<script src="assets/js/bootstrap.min.js"></script>

<script src="assets/js/headroom.min.js"></script>

<script src="assets/js/swiper.min.js"></script>

<script src="assets/js/fancybox.min.js"></script>

<script src="assets/js/slicknav.js"></script>

<script src="assets/js/countdown.js"></script>


<script src="assets/js/custom.js"></script>



      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}