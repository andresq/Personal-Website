import './Link.css'
import Icon from '../Icon/Icon'

const Link = ({ icon, url, name }) => {
	const link = url ? (
		<li>
			<Icon name={icon} />
			<a href={url}>{'\t' + name}</a>
		</li>
	) : (
		<li>
			<Icon name={icon} />
			{'\t' + name}
		</li>
	)
	return link
}

export default Link
