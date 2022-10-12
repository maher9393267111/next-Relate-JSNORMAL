import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// Import Swiper styles

const HomeScreen = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
      
<div>

<section class="slice-ptb">
	<div class="container">
		<div class="row">
			<div class="col-lg-8">
		
				<div class="row align-items-center">
					<div class="col-sm-6">
						<div class="blog-post blog-post-simple mb-5">
							<div class="blog-image">
								<img class="img-fluid rounded" src="images/blog/01.jpg" alt=""/>
							</div>
							<div class="blog-caption px-0">
								<ul class="blog-meta list-unstyled mb-2">
									<li> <a href="#">studio,</a> </li>
									<li> <a href="#">Uncategorized</a> </li>
								</ul>
								<h5 class="mb-1"><a href="#"> To see what is right and not do it is a lack of courage.</a></h5>
								<div class="blog-author d-flex mt-2 align-items-center">
									<a class="text-dark me-2" href="#">By Kobe taylor</a>
									<span class="d-block"> <i class="feather icon-clock me-1"></i>5 min read</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="blog-post blog-post-simple mb-5">
							<div class="blog-image">
								<img class="img-fluid rounded" src="images/blog/02.jpg" alt=""/>
							</div>
							<div class="blog-caption px-0">
								<ul class="blog-meta list-unstyled mb-2">
									<li> <a href="#">personal,</a> </li>
									<li> <a href="#">marketing</a> </li>
								</ul>
								<h5 class="mb-1"><a href="#"> The way get started is to quit talking and begin doing.</a></h5>
								<div class="blog-author d-flex mt-2 align-items-center">
									<a class="text-dark me-2" href="#">By Skye peters</a>
									<span class="d-block"> <i class="feather icon-clock me-1"></i>5 min read</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="blog-post blog-post-simple mb-5">
							<div class="blog-image">
								<img class="img-fluid rounded" src="images/blog/03.jpg" alt=""/>
							</div>
							<div class="blog-caption px-0">
								<ul class="blog-meta list-unstyled mb-2">
									<li> <a href="#">digital,</a> </li>
									<li> <a href="#">music</a> </li>
								</ul>
								<h5 class="mb-1"><a href="#"> It’s not whether you get knocked down, it’s whether you get up.</a></h5>
								<div class="blog-author d-flex mt-2 align-items-center">
									<a class="text-dark me-2" href="#">By Lewis bass</a>
									<span class="d-block"> <i class="feather icon-clock me-1"></i>5 min read</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="blog-post blog-post-simple mb-5">
							<div class="blog-image">
								<img class="img-fluid rounded" src="images/blog/10.jpg" alt=""/>
							</div>
							<div class="blog-caption px-0">
								<ul class="blog-meta list-unstyled mb-2">
									<li> <a href="#">food,</a> </li>
									<li> <a href="#">fashion</a> </li>
								</ul>
								<h5 class="mb-1"><a href="#"> People who are crazy enough to think they can change the world.</a></h5>
								<div class="blog-author d-flex mt-2 align-items-center">
									<a class="text-dark me-2" href="#">By Jerome mayo</a>
									<span class="d-block"> <i class="feather icon-clock me-1"></i>5 min read</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="blog-post blog-post-simple mb-5">
							<div class="blog-image">
								<img class="img-fluid rounded" src="images/blog/11.jpg" alt=""/>
							</div>
							<div class="blog-caption px-0">
								<ul class="blog-meta list-unstyled mb-2">
									<li> <a href="#">business,</a> </li>
									<li> <a href="#">digital</a> </li>
								</ul>
								<h5 class="mb-1"><a href="#"> You learn more from failure than from success. don’t let it.</a></h5>
								<div class="blog-author d-flex mt-2 align-items-center">
									<a class="text-dark me-2" href="#">By Naima haley</a>
									<span class="d-block"> <i class="feather icon-clock me-1"></i>5 min read</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="blog-post blog-post-simple mb-5">
							<div class="blog-image">
								<img class="img-fluid rounded" src="images/blog/12.jpg" alt=""/>
							</div>
							<div class="blog-caption px-0">
								<ul class="blog-meta list-unstyled mb-2">
									<li> <a href="#">fashion,</a> </li>
									<li> <a href="#">studio</a> </li>
								</ul>
								<h5 class="mb-1"><a href="#"> If you are working on something that you really care about.</a></h5>
								<div class="blog-author d-flex mt-2 align-items-center">
									<a class="text-dark me-2" href="#">By Cannon boone</a>
									<span class="d-block"> <i class="feather icon-clock me-1"></i>5 min read</span>
								</div>
							</div>
						</div>
					</div>
				</div>
		
			</div>
			<div class="col-lg-4">
				<div class="main-sidebar ps-lg-6">
					<div class="blog-post blog-post-overlay blog-post-news mb-4">
						<div class="blog-caption pt-5">
							<ul class="blog-meta list-unstyled mb-3">
								<li> <a href="#">marketing,</a> </li>
								<li> <a href="#">music</a> </li>
							</ul>
							<h5 class="mb-3"><a href="#">We may encounter many defeats but we must not be defeated.</a></h5>
						</div>
						<div class="blog-box-img"
              style={{backgroundImage:`url("https://infinitysoftway.com/stokes/images/blog/10.jpg")`}}
             ></div>
					</div>
					<div class="blog-post blog-post-overlay blog-post-news mb-4">
						<div class="blog-caption pt-5">
							<h5 class="mb-3"><a href="#">Whether you think you can or think you can’t, you’re right.</a></h5>
						</div>
						<div class="blog-box-img" 
              style={{backgroundImage:`url("https://infinitysoftway.com/stokes/images/blog/10.jpg")`}}
            ></div>
					</div>
					<div class="widget mb-5 text-center bg-pink-soft-004 py-5 px-4 rounded">
						<h5 class="widget-title">About me</h5>
						<img class="img-fluid rounded-circle avatar-100" src="images/avatar/01.jpg" alt=""/>
						<p class="mt-4">Odio reprehenderit, deserunt tenetur nemo beatae corporis facere.</p>
						<img class="img-fluid rounded-circle avatar-100" src="images/signature.png" alt=""/>
					</div>
					<div class="widget mb-5">
						<h5 class="widget-title">Follow us</h5>
						<div class="social-icons social-icon-box social-icon-round icon-border icon-colored">
							<div class="row justify-content-between">
								<div class="col-6 mb-3">
									<div class="d-flex">
										<a class="icon facebook" href="#!"> <i class="fab fa-facebook-f"></i> </a>
										<div class="ms-2">
											<h6 class="mb-0">60k</h6>
											<p>Likes</p>
										</div>
									</div>
								</div>
								<div class="col-6 mb-3">
									<div class="d-flex">
										<a class="icon twitter" href="#!"> <i class="fab fa-twitter"></i> </a>
										<div class="ms-2">
											<h6 class="mb-0">550k</h6>
											<p>Likes</p>
										</div>
									</div>
								</div>
								<div class="col-6 mb-3">
									<div class="d-flex">
										<a class="icon pinterest" href="#!"> <i class="fab fa-pinterest"></i> </a>
										<div class="ms-2">
											<h6 class="mb-0">215k</h6>
											<p>Likes</p>
										</div>
									</div>
								</div>
								<div class="col-6 mb-3">
									<div class="d-flex">
										<a class="icon instagram" href="#!"> <i class="fab fa-instagram"></i> </a>
										<div class="ms-2">
											<h6 class="mb-0">80k</h6>
											<p>Likes</p>
										</div>
									</div>
								</div>
								<div class="col-6">
									<div class="d-flex">
										<a class="icon dribbble" href="#!"> <i class="fab fa-dribbble"></i> </a>
										<div class="ms-2">
											<h6 class="mb-0">44k</h6>
											<p>Likes</p>
										</div>
									</div>
								</div>
								<div class="col-6">
									<div class="d-flex">
										<a class="icon linkedin" href="#!"> <i class="fab fa-linkedin-in"></i> </a>
										<div class="ms-2">
											<h6 class="mb-0">89k</h6>
											<p>Likes</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="widget mb-5">
						<h5 class="widget-title">Celebration </h5>
						<div class="blog-post blog-post-overlay blog-post-news">
							<div class="blog-meta-comments">
								<a class="blog-like" href="#"> <i class="feather icon-heart pe-1"></i> 25 </a>
								<a class="blog-comments" href="#"> <i class="feather icon-message-circle pe-1"></i> 12 </a>
							</div>
							<div class="blog-caption">
								<ul class="blog-meta list-unstyled mb-3">
									<li> <a href="#">marketing,</a> </li>
									<li> <a href="#">personal</a> </li>
								</ul>
								<h5 class="mb-3"><a href="#">The way get started is to quit talking and begin doing.</a></h5>
							</div>
							<div class="blog-box-img" 
                  style={{backgroundImage:`url("https://infinitysoftway.com/stokes/images/blog/10.jpg")`}}
              ></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>






{/* <!--========== 
	Start of Blogs section ==========--> */}


{/* <Swiper


modules={[Pagination]} navigation pagination={{ clickable: true }} className="mySwiper" slidesPerView={1} spaceBetween={50} >
                  <SwiperSlide>
                    <img className="item" src={picture1} alt="Image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="item" src={picture2} alt="Image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="item" src={picture3} alt="Image" />
                  </SwiperSlide>
            </Swiper> */}

<Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div class="blog-post blog-post-overlay blog-post-news">
								<div class="blog-meta-comments">
									<a class="blog-like" href="#"> <i class="feather icon-heart pe-1"></i> 25 </a>
									<a class="blog-comments" href="#"> <i class="feather icon-message-circle pe-1"></i> 12 </a>
								</div>
								<div class="blog-caption">
									<ul class="blog-meta list-unstyled mb-3">
										<li> <a href="#">business,</a> </li>
										<li> <a href="#">music</a> </li>
									</ul>
									<h5 class="mb-3"><a href="#">We may encounter many defeats but we must not be defeated.</a></h5>
								</div>
								<div class="blog-box-img" 
                   style={{backgroundImage:`url("https://infinitysoftway.com/stokes/images/blog/10.jpg")`}}
                ></div>
							</div>



      </SwiperSlide>
      <SwiperSlide>
      <div class="blog-post blog-post-overlay blog-post-news">
								<div class="blog-meta-comments">
									<a class="blog-like" href="#"> <i class="feather icon-heart pe-1"></i> 25 </a>
									<a class="blog-comments" href="#"> <i class="feather icon-message-circle pe-1"></i> 12 </a>
								</div>
								<div class="blog-caption">
									<ul class="blog-meta list-unstyled mb-3">
										<li> <a href="#">business,</a> </li>
										<li> <a href="#">music</a> </li>
									</ul>
									<h5 class="mb-3"><a href="#">We may encounter many defeats but we must not be defeated.</a></h5>
								</div>
								<div class="blog-box-img" 
                   style={{backgroundImage:`url("https://infinitysoftway.com/stokes/images/blog/10.jpg")`}}
                ></div>
							</div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="blog-post blog-post-overlay blog-post-news">
								<div class="blog-meta-comments">
									<a class="blog-like" href="#"> <i class="feather icon-heart pe-1"></i> 25 </a>
									<a class="blog-comments" href="#"> <i class="feather icon-message-circle pe-1"></i> 12 </a>
								</div>
								<div class="blog-caption">
									<ul class="blog-meta list-unstyled mb-3">
										<li> <a href="#">business,</a> </li>
										<li> <a href="#">music</a> </li>
									</ul>
									<h5 class="mb-3"><a href="#">We may encounter many defeats but we must not be defeated.</a></h5>
								</div>
								<div class="blog-box-img" 
                   style={{backgroundImage:`url("https://infinitysoftway.com/stokes/images/blog/10.jpg")`}}
                ></div>
							</div>


      </SwiperSlide>
      <SwiperSlide>
      <div class="blog-post blog-post-overlay blog-post-news">
								<div class="blog-meta-comments">
									<a class="blog-like" href="#"> <i class="feather icon-heart pe-1"></i> 25 </a>
									<a class="blog-comments" href="#"> <i class="feather icon-message-circle pe-1"></i> 12 </a>
								</div>
								<div class="blog-caption">
									<ul class="blog-meta list-unstyled mb-3">
										<li> <a href="#">business,</a> </li>
										<li> <a href="#">music</a> </li>
									</ul>
									<h5 class="mb-3"><a href="#">We may encounter many defeats but we must not be defeated.</a></h5>
								</div>
								<div class="blog-box-img" 
                   style={{backgroundImage:`url("https://infinitysoftway.com/stokes/images/blog/10.jpg")`}}
                ></div>
							</div>
      </SwiperSlide>
      ...
    </Swiper>



{/* <!--========== 
	End of Blogs section ==========--> */}







</div>


      )}
    </>
  );
};

export default HomeScreen;
