import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
	return(
		<button className="btn btn-outline-success my-2 my-sm-0" onClick={onClick}>
			{ text }
		</button>
	)
}

Button.defaultProps = {
	background: 'green',
}

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
}

export default Button