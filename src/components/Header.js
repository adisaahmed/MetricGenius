const Header = () => {
	return(
	    <header id="site-header" class="fixed-top">
        	<div class="container">
            	<nav class="navbar navbar-expand-lg stroke px-0">
	                <h1>
	                    <a class="navbar-brand" href="index.html">
	                        LOGO
	                    </a>
	                </h1>      
				    
	                <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
	                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
	                    aria-label="Toggle navigation">
	                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
	                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
	                </button>

	                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
	                    <ul class="navbar-nav mx-lg-auto">
	                        <li class="nav-item active">
	                            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
	                        </li>
	                        <li class="nav-item">
	                            <a class="nav-link" href="about.html">About Us</a>
	                        </li>
	                        <li class="nav-item">
	                            <a class="nav-link" href="classes.html">Experts</a>
	                        </li>
	                        <li class="nav-item">
	                            <a class="nav-link" href="contact.html">Contact Us</a>
	                        </li>
	                    </ul>
	                </div>
            	</nav>
        	</div>
    	</header>
	)
}

export default Header