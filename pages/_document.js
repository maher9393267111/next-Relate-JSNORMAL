/* eslint-disable @next/next/no-sync-scripts */
// pages/_document.js
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>

<Head>


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Jost:wght@300;400;500;600;700;800;900&display=swap"/>


<link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css"/>


<link rel="./stylesheet" href="css/font-awesome/all.min.css"/>
<link rel="./stylesheet" href="css/feather/iconfont.css"/>
<link rel="./stylesheet" href="css/pe-icon-stroke/Pe-icon-7-stroke.css"/>
<link rel="./stylesheet" href="css/simple-line-icons/simple-line-icons.css"/>
<link rel="./stylesheet" href="css/themify-icons/themify-icons.css"/>
<link rel="./stylesheet" href="css/pe-icon-stroke/Pe-icon-7-stroke.css"/>
<link rel="./stylesheet" href="css/swiper/swiper.min.css"/>
<link rel="./stylesheet" href="css/animate/animate.min.css"/>
<link rel="./stylesheet" href="css/magnific-popup/magnific-popup.css"/>
<link rel="./stylesheet" href="css/mCustomScrollbar/jquery.mCustomScrollbar.min.css"/>


<link rel="stylesheet" href="./css/style.css"/>




	<script src="./js/jquery-3.6.0.min.js"></script>
	<script src="./js/popper.min.js"></script>
	<script src="./js/bootstrap/bootstrap.min.js"></script>

	<script src="./js/appear/jquery.appear.js"></script>
	<script src="./js/swiper/swiper.min.js"></script>
	<script src="./js/swiper/SwiperAnimation.min.js"></script>
	<script src="./js/magnific-popup/jquery.magnific-popup.min.js"></script>
	<script src="./js/isotope/isotope.pkgd.min.js"></script>
	<script src="./js/typer/typer.js"></script>
  <script src="./js/mCustomScrollbar/jquery.mCustomScrollbar.min.js"></script>
  <script src="./js/jarallax/jarallax.min.js"></script>

  <script src="./js/functions.js"></script>






</Head>

    
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}