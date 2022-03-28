import React, {useState} from 'react';
import {Link} from "react-router-dom"; 

import Layout from '../Layout/header';
import logo from "../../assets/img/logo1.png";

import "./setting.scss";

const Experimental = () => {
	let option = [
		"USD - United States Dollar",
		"STORJ - Storj",
		"TKN - TokenCard",
		"PAY - TenX"
	];
	let language = [
		"English",
		"Chinese",
		"Russian",
		"Spanish"
	];
	const [toggle, setValue] = useState(false);
	return <>
		<Layout>
			<div className='setting-general'>
				<div className="card">
					<h2 
						style={{textAlign:'center'}}
					>
						About
					</h2>
					<div className='general-content'>
						<div className="general-content-item">
							<span>MetaMask Version</span>
							<span className="general-content-description">10.10.2</span>
						</div>

						<div className="general-content-item">
							<span>MetaMask is designed and built around the world.</span>
						</div>
					</div>
					<div>
						<h3>Links</h3>
						<div className='link-group'>
							<Link to="#">Privacy Policy</Link>
							<Link to="#">Terms Use</Link>
							<Link to="#">Attributions</Link>
						</div>
						<div className='m-b'></div>
						<div className='link-group'>
							<Link to="#">Privacy Policy</Link>
							<Link to="#">Terms Use</Link>
							<Link to="#">Attributions</Link>
						</div>
						<div style={{display: "flex", justifyContent: "center"}}>
							<img style={{marginTop: "40px"}} src={logo} className="info-tab__logo" alt="" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	</>
}

export default Experimental;