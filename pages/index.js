import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from "next/head";
import Script from "next/script";
// import $ from 'jquery';

import 'swiper/css';

// Import Swiper styles

const HomeScreen = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);


 const [isActive,setisActive] = useState(false)



const toggleBar = ()=>{

  setisActive(!isActive)



}


const openBar = ()=>{

  setisActive(fasle)



}





  return (
    <>




      {domLoaded && (

<div>

<div className="col-sm-12 text-center">

<h3>
    Our Services
</h3>

<p className="page-breadcrumb">
    <a href="#">Home</a> / Our Services
</p>


</div>



</div>






      )}
    </>
  );
};

export default HomeScreen;
