const CustomerSignUp = () => {
	return (
		<div>
			<div class="inner-banner">
			    <section class="w3l-breadcrumb">
			      <div class="container">
			        <ul class="breadcrumbs-custom-path">
			          <li><a href="index.html">Home</a></li>
			          <li class="active"><span class="fa fa-chevron-right mx-2" aria-hidden="true"></span>
			          	Sign Up Form
			          </li>
			        </ul>
			      </div>
			    </section>
			</div>

			<section class="w3l-index-block2 py-5">
			    <div class="container py-md-4 py-3">
			      <div class="title-heading-w3 text-center mx-auto">
			        <h3 class="title-main">Create your account. It's free and only takes a minute.</h3>
			      </div>
			    </div>
		  	</section>

		  	<section class="w3l-contacts-12">
		        <div class="contact-top pt-5">
		            <div class="container py-md-4 py-3">
		                <div class="d-grid cont-main-top mt-5">
		                    <div class="contacts12-main mt-lg-2">
		                        <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="main-input">
		                            <div class="top-inputs d-grid">
		                                <input type="text" placeholder="First Name" name="w3lName" id="w3lName" required="" />
		                                <input type="text" name="Lastname" placeholder="Last Name" id="w3lSender" required="" />
		                            </div>

		                            <div class="top-inputs d-grid">
		                                <input type="email" placeholder="Email Address" name="w3lName" id="w3lName" required="" />
		                                <input type="text" name="phone" placeholder="Phone Number" id="w3lSender" required="" />
		                            </div>
		                            <input type="text" placeholder="Password" name="w3lName" id="w3lName" required="" />
		                            <input type="text" placeholder="Confirm Password" name="w3lName" id="w3lName" required="" class="input_password" />
		                            
		                            <button type="submit" class="btn btn-primary btn-style mt-4">Sign Up</button>
		                        </form>
		                    </div>

		                    <div class="contact">
		                        <div class="cont-subs">
		                            <p class="register_page_big_p">
		                            	Please use your work email address so we can connect you with your Expert or Experts in METRIC GENIUS.
		                            </p>

		                            <p>
		                            	By signing up, I agree to the METRIC GENIUS Privacy Policy and Terms of Service.
		                            </p>
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

export default CustomerSignUp