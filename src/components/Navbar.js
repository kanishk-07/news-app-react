import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
// useLocationHook from 'react' can be used to display nav items as active(bright white)
export default function Navbar() {
	return (
		<div>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img src="logo192.png" alt="" width="30" height="30" className="d-inline-block align-text-top" aria-current="page"/>
						NewsMonkey
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav nav-fill w-100 me-auto mb-2 mb-lg-0">
							<li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}