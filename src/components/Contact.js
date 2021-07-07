import { Link } from 'react-router-dom'


const Footer = () => {
	return(
	    <div>
	    	<div class="inner-banner">
		        <section class="w3l-breadcrumb">
		            <div class="container">
		                <ul class="breadcrumbs-custom-path">
		                    <li><a href="index.html">Home</a></li>
		                    <li class="active"><span class="fa fa-chevron-right mx-2" aria-hidden="true"></span> Contact Us</li>
		                </ul>
		            </div>
		        </section>
		    </div>

		    <section class="w3l-contacts-12">
		        <div class="contact-top pt-5">
		            <div class="container py-md-4 py-3">
		                <div class="title-heading-w3 text-center mx-auto">
		                    <h3 class="title-main">Get In Touch</h3>
		                    <p class="mt-4 sub-title">
		                    	Great vision without great people is irrelevant. Let's work together.
		                    </p>
		                </div>

		                <div class="d-grid cont-main-top mt-5">
		                    <div class="contacts12-main mt-lg-2">
		                        <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="main-input">
		                            <div class="top-inputs d-grid">
		                                <input type="text" placeholder="Name" name="w3lName" id="w3lName" required="" />
		                                <input type="email" name="email" placeholder="Email" id="w3lSender" required="" />
		                            </div>
		                            <input type="text" placeholder="Phone Number" name="w3lName" id="w3lName" required="" />
		                            <textarea placeholder="Message" name="w3lMessage" id="w3lMessage" required=""></textarea>
		                            <button type="submit" class="btn btn-primary btn-style mt-4">Submit Now</button>
		                        </form>
		                    </div>

		                    <div class="contact">
		                        <div class="cont-subs">
		                            <div class="cont-add">
		                                <h4>Address:</h4>
		                                <p class="contact-text-sub">Nigeria, <br /> 37 Plantation Rd, GRA, Ilorin</p>
		                            </div>
		                            <div class="cont-add">
		                                <h4>Email:</h4>
		                                <a href="mailto:info@example.com">
		                                    <p class="contact-text-sub">info@metric.com</p>
		                                </a>
		                            </div>
		                            <div class="cont-add">
		                                <h4>Phone:</h4>
		                                <a href="tel:+7-800-999-800">
		                                    <p class="contact-text-sub">+234-81-5362-9550</p>
		                                </a>
		                            </div>
		                            <div class="social-icons-con">
		                                <a href="#facebook"><span class="fa fa-facebook-square" aria-hidden="true"></span></a>
		                                <a href="#instagram"><span class="fa fa-instagram" aria-hidden="true"></span></a>
		                                <a href="#google-plus"><span class="fa fa-linkedin" aria-hidden="true"></span></a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div class="map">
		                <div class="mapouter">
		                	<div class="gmap_canvas">
		                		<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=37%20plantation%20road%20gra%20Ilorin&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
		                	</div>
		                </div>
		            </div>
		        </div>
		    </section>
	    </div>
	)
}

export default Footer