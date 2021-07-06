import { Link } from 'react-router-dom'


const MainBody = () => {
	return (
		<div>
			<section id="home" class="w3l-banner py-md-5 pt-md-0 pt-sm-5 pt-4">
		        <div class="container py-lg-5 py-md-4 pt-md-0 pt-sm-1 mt-lg-0 mt-5">
		            <div class="row align-items-center py-lg-5 py-md-5 mt-4">
		                <div class="banner-image-w3 text-lg-center">
		                    <img src="images/new-high2.png" alt="" class="img-fluid" />
		                </div>
		                <div class="offset-lg-6 col-lg-6 offset-md-5 col-md-7 mt-lg-5 pt-md-4 pt-5">
		                    <h3 class="mb-sm-4 mb-3 title"> BEST FOOTBALL 
		                    	<br />PREDICTION
		                        <span class="type-js">
		                        	<span class="text-js"> SITE</span>
	                        	</span>
	                        </h3>
		                    <p>We use revalant statistics, methodologies, and trends to estimate our predictions</p>
		                    <div class="mt-md-5 mt-4 mb-lg-0 mb-4">
		                        <Link class="btn btn-primary btn-style" to="/experts">View Sure Games</Link>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>

		    <section class="w3l-index-block2 py-5">
		        <div class="container py-md-4 py-3">
		            <div class="title-heading-w3 text-center mx-auto">
		                <h3 class="title-main">Popular Metric Experts</h3>
		                <p class="mt-4 sub-title"> GOOD AND TRUSTED EXPERTS FOR MATCH PREDICTIONS.</p>
		            </div>
		            <div class="row bottom_grids mt-5 pt-lg-3">
		                <div class="col-lg-3 col-md-6 px-lg-2">
		                    <div class="s-block">
		                        <a to="classes.html" class="d-block">
		                            <div class="p-3">
		                                <h3 class="mb-2">Lino Lion</h3>
		                                <ul>
		                                	<li>
		                                		Team:
		                                		<span className="team_team">
		                                			Wexford Youths v Athlone Town
		                                		</span>
	                                		</li>

	                                		<br />

	                                		<li>
		                                		Predict:
		                                		<span className="team_predict">
		                                			btts 
		                                		</span>
	                                		</li>
		                                </ul>
		                                <strong class="fee-class-w3 mt-3">Get My Games</strong>
		                            </div>
		                        </a>
		                    </div>
		                </div>
		                <div class="col-lg-3 col-md-6 px-lg-2 mt-md-0 mt-4 grid-4-col">
		                    <div class="s-block">
		                        <a to="classes.html" class="d-block">
		                            <div class="p-3">
		                                <h3 class="mb-2">Amco Lino</h3>
		                                <ul>
		                                	<li>
		                                		Team:
		                                		<span className="team_team">
		                                			El Entag El Harby v El Gouna
		                                		</span>
	                                		</li>

	                                		<br />

	                                		<li>
		                                		Predict:
		                                		<span className="team_predict">
		                                			1-1 
		                                		</span>
	                                		</li>
		                                </ul>
		                                <strong class="fee-class-w3 mt-3">Get My Games</strong>
		                            </div>
		                        </a>
		                    </div>
		                </div>
		                <div class="col-lg-3 col-md-6 px-lg-2 mt-lg-0 mt-4 grid-4-col">
		                    <div class="s-block">
		                        <a href="classes.html" class="d-block">
		                            <div class="p-3">
		                                <h3 class="mb-2">Lino Plenty</h3>
		                                <ul>
		                                	<li>
		                                		Team:
		                                		<span className="team_team">
		                                			Brazil v Chile
		                                		</span>
	                                		</li>

	                                		<br />

	                                		<li>
		                                		Predict:
		                                		<span className="team_predict">
		                                			1 & Btts 
		                                		</span>
	                                		</li>
		                                </ul>
		                                <strong class="fee-class-w3 mt-3">Get My Games</strong>
		                            </div>
		                        </a>
		                    </div>
		                </div>
		                <div class="col-lg-3 col-md-6 px-lg-2 mt-lg-0 mt-4">
		                    <div class="s-block">
		                        <a href="classes.html" class="d-block">
		                            <div class="p-3">
		                                <h3 class="mb-2">Teejay Maya</h3>
		                                <ul>
		                                	<li>
		                                		Team:
		                                		<span className="team_team">
		                                			Wexford Youths v Athlone Town
		                                		</span>
	                                		</li>

	                                		<br />

	                                		<li>
		                                		Predict:
		                                		<span className="team_predict">
		                                			over 2.5 
		                                		</span>
	                                		</li>
		                                </ul>
		                                <strong class="fee-class-w3 mt-3">Get My Games</strong>
		                            </div>
		                        </a>
		                    </div>
		                </div>
		            </div>
		            <div class="mt-5 mx-auto text-center">
		                <a class="btn btn-primary btn-style" href="classes.html">View All Experts</a>
		            </div>
		        </div>
		    </section>

		    <section class="w3l-feature-8">
		        <div class="features-main py-5">
		            <div class="container py-md-4 py-3">
		                <div class="features">
		                    <div class="feature-1">
		                        <div class="feature-body">
		                            <div class="feature-images">
		                                <span class="fa fa-bullhorn" aria-hidden="true"></span>
		                            </div>
		                            <div class="feature-info">
		                                <Link to="/expertregister">
		                                    <h3 class="feature-titel">Become An Expert</h3>
		                                </Link>
		                                <p class="feature-text">
		                                	Your goal to become an expert isn't to look and feel like a giant smartypants. It's to help your subscribers, clients, and customers WIN.
		                                </p>
		                                <Link to="/expertregister" class="feature-link">GET STARTED <span
		                                        class="arrow">&raquo;</span></Link>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="feature-2">
		                        <div class="feature-body">
		                            <div class="feature-images">
		                                <span class="fa fa-users" aria-hidden="true"></span>
		                            </div>
		                            <div class="feature-info">
		                                <Link to="about.html">
		                                    <h3 class="feature-titel">Get Sure Games</h3>
		                                </Link>
		                                <p class="feature-text">
		                                	If unsure, simply subscribe to our EXPERT which are 99.9% sure and guaranteed. Get 5 to 10 sure odds daily.
		                                </p>
		                                <Link to="/experts" class="feature-link">SUBSCRIBE NOW <span
		                                        class="arrow">&raquo;</span></Link>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="feature-3">
		                        <div class="feature-body">
		                            <div class="feature-images">
		                                <span class="fa fa-umbrella" aria-hidden="true"></span>
		                            </div>
		                            <div class="feature-info">
		                                <Link to="/contact">
		                                    <h3 class="feature-titel">We are here for you 24/7</h3>
		                                </Link>
		                                <p class="feature-text">
		                                	We take pride in our service excellence and efficiency, and we maintain a service desk that responds at all times.
		                                </p>
		                                <div class="hover">
		                                    <Link to="/contact" class="feature-link">CONTACT US <span
		                                            class="arrow">&raquo;</span></Link>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>

		    <section class="w3l-servicesblock py-5">
		        <div class="container py-md-4 py-3">
		            <div class="row">
		                <div class="col-lg-6 left-wthree-img">
		                    <img src="images/image2.jpg" alt="" class="img-fluid" />
		                </div>
		                <div class="col-lg-6 about-right-faq align-self mt-lg-0 mt-sm-5 mt-4 pl-lg-5">
		                    <h3 class="title-main-2 mb-3">Make Profits Steadily</h3>
		                    <div class="separatorhny"></div>
		                    <p class="">
		                    	It is our passion to help millions of stakers across the globe win!!! <br />
		                    	Are you confused with making the right selections?
		                    	Let our experts guide you to victory with their best football tips selection of the day!
		                    </p>

		                    <div class="row mt-md-5 mt-3">
		                        <div class="col-sm-6 left-insp-art">
		                            <ul>
		                                <li>
		                                	<i class="fa fa-hand-o-right mr-2" aria-hidden="true"></i>
		                                	Accurate Predictions
		                                </li>
		                                <li>
		                                	<i class="fa fa-hand-o-right mr-2" aria-hidden="true"></i>
		                                	Good Strategy
	                                	</li>
		                                <li>
		                                	<i class="fa fa-hand-o-right mr-2" aria-hidden="true"></i>
		                                	Stake on good Team
		                                </li>
		                                <li>
		                                	<i class="fa fa-hand-o-right mr-2" aria-hidden="true"></i>
		                                	We good in predicting
		                                </li>
		                            </ul>
		                        </div>
		                        <div class="col-sm-6 left-insp-art">
		                            <ul>
		                                <li>
		                                	<i class="fa fa-hand-o-right mr-2" aria-hidden="true"></i>
		                                	Get Excellent Predictions
		                                </li>
		                                <li>
		                                	<i class="fa fa-hand-o-right mr-2" aria-hidden="true"></i>
		                                	Win More
		                                </li>
		                                <li>
		                                	<i class="fa fa-hand-o-right mr-2" aria-hidden="true"></i>
		                                	Seasonal Tips
                                        </li>
		                                <li>
		                                	<i class="fa fa-hand-o-right mr-2" aria-hidden="true"></i>
		                                	Paramount Benefits
		                                </li>
		                            </ul>
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
		                <a href="about.html" class="btn btn-style btn-white mt-sm-5 mt-4 mr-2">Register as an Expert</a>
		                <a href="contact.html" class="btn btn-style btn-primary mt-sm-5 mt-4">View Sure Games</a>
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
		</div>
	)
}

export default MainBody