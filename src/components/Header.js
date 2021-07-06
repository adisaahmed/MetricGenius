import { Link } from 'react-router-dom'


const Header = () => {
	return(
	    <header id="site-header" class="fixed-top">
        	<div class="container">
            	<nav class="navbar navbar-expand-lg stroke px-0">
	                <h1>
	                    <Link class="navbar-brand" to="/">
	                        LOGO
	                    </Link>
	                </h1>      
				    
	                <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
	                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
	                    aria-label="Toggle navigation">
	                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
	                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
	                </button>

	                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
	                    <ul class="navbar-nav mx-lg-auto">
	                        <li class="nav-item">
	                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
	                        </li>
	                        <li class="nav-item">
	                            <Link class="nav-link" to="/about">About Us</Link>
	                        </li>
	                        <li class="nav-item">
	                            <Link class="nav-link" to="/experts">Experts</Link>
	                        </li>
	                        <li class="nav-item">
	                            <Link class="nav-link" to="/contact">Contact Us</Link>
	                        </li>
	                    </ul>
	                </div>
            	</nav>
        	</div>
    	</header>
	)
}

export default Header