import { Link } from 'react-router-dom'


const About = () => {
	return(
	    <div>
	    	<div class="inner-banner">
			    <section class="w3l-breadcrumb">
			      <div class="container">
			        <ul class="breadcrumbs-custom-path">
			          	<li>
			          		<Link to='/'>
			          			Home
		          			</Link>
		          		</li>
			          <li class="active"><span class="fa fa-chevron-right mx-2" aria-hidden="true"></span> About Us</li>
			        </ul>
			      </div>
			    </section>
		  	</div>

		  	<section class="w3l-text-6 py-5" id="about">
			    <div class="text-6-mian py-md-5">
			      <div class="container">
			        <div class="row top-cont-grid align-items-center">
			          <div class="col-lg-6 left-img pr-lg-4">
			            <img src="images/about.png" alt="" class="img-responsive img-fluid" />
			          </div>
			          <div class="col-lg-6 text-6-info mt-lg-0 mt-4">
			            <h6>About our Site</h6>
			            <h2>Welcome to our <span>Metric Genius</span></h2>
			            <p>
			            	We've got you covered with a complete set of tips for all games. We’ve analysed millions of data points to form our betting model and give you expert match insight.
			            </p>
			            <Link to="/experts" class="btn btn-style btn-primary mt-sm-5 mt-4">Get Correct Games From Expert</Link>
			          </div>
			        </div>
			      </div>
			    </div>
		  	</section>

	    	<section class="w3_stats py-5" id="stats">
			    <div class="container py-md-4">
			      <div class="title-heading-w3 text-center mx-auto">
			        <h3 class="title-main">Our Overview</h3>
			        <p class="mt-4 sub-title"> 
			        	Welcome to METRIC GENIUS, the home of football match predictions and previews! Our team of dedicated experts 
			        	analyse all the week’s football matches, big or small, to give you the best possible predictions for today’s games.
			        </p>
			      </div>
			      <div class="w3-stats text-center mt-5">
			        <div class="row">
			          <div class="col-md-3 col-6">
			            <div class="counter">
			              <span class="fa fa-users"></span>
			              <div class="timer count-title count-number mt-3" data-to="1286" data-speed="1500"></div>
			              <p class="count-text">Awesome Experts</p>
			            </div>
			          </div>
			          <div class="col-md-3 col-6">
			            <div class="counter">
			              <span class="fa fa-video-camera"></span>
			              <div class="timer count-title count-number mt-3" data-to="36076" data-speed="1500"></div>
			              <p class="count-text ">Game Views</p>
			            </div>
			          </div>
			          <div class="col-md-3 col-6">
			            <div class="counter">
			              <span class="fa fa-smile-o"></span>
			              <div class="timer count-title count-number mt-3" data-to="16300" data-speed="1500"></div>
			              <p class="count-text">Happy Customers</p>
			            </div>
			          </div>
			          <div class="col-md-3 col-6">
			            <div class="counter">
			              <span class="fa fa-thumbs-up"></span>
			              <div class="timer count-title count-number mt-3" data-to="10630" data-speed="1500"></div>
			              <p class="count-text">Statisfication</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			</section>

	    	<div class="middle py-5">
		        <div class="container py-md-5 py-4">
		            <div class="welcome-left text-left py-lg-4">
		                <h3>Creative & most complete prediction website</h3>
		                <p class="mt-3 pr-lg-5 mr-lg-5">
		                	Metric Genius makes it very easy for visitors to win their games. We provide accurate and live statistics to visitors to aid their predictions.
		                </p>
		                <Link to="/expertregister" class="btn btn-style btn-white mt-sm-5 mt-4 mr-2">Register as an Expert</Link>
		                <Link to="/experts" class="btn btn-style btn-primary mt-sm-5 mt-4">View Sure Experts</Link>
		            </div>
		        </div>
		    </div>

		    <div class="w3l-cutomer-main-cont">
		        <div class="testimonials text-center py-5">
		            <div class="container py-md-5 py-4">
		                <div class="title-heading-w3 text-center mx-auto">
		                    <h3 class="title-main">Customers Say</h3>
		                    <p class="mt-4 sub-title"> What people say about us</p>
		                </div>
		                <div class="row content-sec mt-md-5 mt-4">
		                    <div class="col-lg-4 col-md-6 testi-sections">
		                        <div class="testimonials_grid">
		                            <p class="sub-test"><span class="fa fa-quote-left mr-2" aria-hidden="true"></span> In my history of being punter, I can honestly say that there is not one prediction site that I've ever make do of that has better service than METRIC GENIUS.
		                            </p>
		                            <div class="d-grid sub-author-con">
		                                <div class="testi-img-res">
		                                    <img src="images/testi2.jpg" alt="" class="img-fluid" />
		                                </div>
		                                <div class="testi_grid text-left">
		                                    <h5>Umaru Amadu</h5>
		                                    <p>Punter</p>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="col-lg-4 col-md-6 mt-md-0 mt-4 testi-sections">
		                        <div class="testimonials_grid">
		                            <p class="sub-test"><span class="fa fa-quote-left mr-2" aria-hidden="true"></span> Your team’s professionalism and willingness to do whatever it takes with minimal interruption was recognized by expert. My hats off to you for an outstanding job. METRIC GENIUS is a great partner and I am enjoying working with you.
		                            </p>
		                            <div class="d-grid sub-author-con">
		                                <div class="testi-img-res">
		                                    <img src="images/testi1.jpg" alt="" class="img-fluid" />
		                                </div>
		                                <div class="testi_grid text-left">
		                                    <h5>Niyi Qudus</h5>
		                                    <p>Expert</p>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="col-lg-4 col-md-6 mt-lg-0 mt-4 testi-sections">
		                        <div class="testimonials_grid">
		                            <p class="sub-test"><span class="fa fa-quote-left mr-2" aria-hidden="true"></span> I’m never really worried that the prediction isn’t going to come as expected. I can call and talk to anyone and get my questions answered in an instant. All communication with them is really easy. METRIC GENIUS do handle everything.
		                            </p>
		                            <div class="d-grid sub-author-con">
		                                <div class="testi-img-res">
		                                    <img src="images/testi3.jpg" alt="" class="img-fluid" />
		                                </div>
		                                <div class="testi_grid text-left">
		                                    <h5>Lanre Yemi</h5>
		                                    <p>Punter</p>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>

		    <section class="w3l-form-26">
		        <div class="form-26-main">
		            <div class="container py-md-5">
		                <div class="form-inner-cont">
		                    <div class="title-heading-w3 text-center mx-auto">
		                        <h3 class="title-main">Football Predictions and Tips for YOU!!!</h3>
		                        <p class="mt-4 pt-2 sub-title">
		                        	Metric Genius presents mathematical football predictions generated by experts on the basis of statistics.
		                        </p>
		                    </div>
		                    <div class="form-right-inf mt-5">
		                        <div class="btn btn-style btn-primary button-eff-news">
		                                    <button class="btn">GET SURE GAMES NOW!</button>
		                                </div>
		                    </div>
		                </div>
		            </div>
		            <div class="png-img-w3ls">
		                <img src="images/newsletter3.png" height="500" alt="" class="img-responsive" />
		            </div>
		        </div>
		    </section>
	    </div>
	)
}

export default About