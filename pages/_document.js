/* eslint-disable @next/next/no-sync-scripts */
// pages/_document.js
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>

<Head>



    <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
  
    <link rel="stylesheet" href="assets/css/icons.min.css"/>
  
    <link rel="stylesheet" href="assets/css/plugins.css"/>
 
    <link rel="stylesheet" href="assets/css/style.css"/>
  
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>






    <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>

<script src="assets/js/popper.min.js"></script>

<script src="assets/js/bootstrap.min.js"></script>

<script src="assets/js/plugins.js"></script>

<script src="assets/js/ajax-mail.js"></script>

<script src="assets/js/main.js"></script>



</Head>

    
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}