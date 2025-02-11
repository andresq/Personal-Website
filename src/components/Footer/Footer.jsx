import Icon from '../Icon/Icon'
import './Footer.css'

const Footer = () => {
	return (
		<div className="container">
			<div className="footer">
				<a href="https://github.com/andresq">
					<Icon name={'github'} />
				</a>
				<a href="https://www.linkedin.com/in/andresq1">
					<Icon name={'linkedin'} />
				</a>
				<a href="mailto:hello@andresq.com">
					<Icon name={'email'} />
				</a>
				<a href="https://instagram.com/andresq.exe">
					<Icon name={'instagram'} />
				</a>
				<a href="/links">
					<Icon name={'game'} />
				</a>
			</div>
		</div>
	)
}

export default Footer
