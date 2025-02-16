import './Links.css'
import BackgroundImage from '../BackgroundImage/BackgroundImage'
import Link from '../Link/Link'

const Links = () => {
	return (
		<BackgroundImage>
			<ul className="links">
				<Link
					icon="instagram"
					url="https://instagram.com/andresq.exe"
					name="Instagram"
				/>
				<li>👾👾👾</li>
				<Link icon="playstation" name="andresq279" />
				<Link icon="xbox" name="andresq27" />
				<Link icon="steam" name="andresq27" />
				<Link icon="switch" name="SW-7829-5136-8003" />
			</ul>
		</BackgroundImage>
	)
}

export default Links
