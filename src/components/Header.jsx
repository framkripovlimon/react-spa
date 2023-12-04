import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">Router</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><Link to="/contact">Contact</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</div>
		</nav>
	)
}

export {Header}
