import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from '../Layout/header';
import arrow from '../../assets/img/right-arrow.png';
import './setting.scss';
const Land = () => {
	return <>
		<Layout>
			<div className='setting-landing'>
				<div className='setting-header'>
					<h1>Setting</h1>
				</div>
				<div className='landing-content'>
					<div className="account-menu__divider"></div>
					<div className='tab'>
						<Link to="/setting/general" style={{color: "white"}}>
							<div className='tab-content'>
								<h2 className='title'>
									General
								</h2>
								<div className='content'>
									Currency conversion, primary currency, language, blockies identicon
								</div>
							</div>
							<div className='tab-caret'>
								<img src={arrow} />
							</div>
						</Link>
					</div>
					<div className="account-menu__divider"></div>
					<div className='tab'>
						<Link to="/setting/advanced" style={{color: "white"}}>
							<div className='tab-content'>
								<h2 className='title'>
									Advanced
								</h2>
								<div className='content'>
									Access developer features, download State Logs, Reset Account, setup test networks and custom RPC
								</div>
							</div>
							<div className='tab-caret'>
								<img src={arrow} />
							</div>
						</Link>
					</div>
					<div className="account-menu__divider"></div>
					<div className='tab'>
						<Link to="/setting/contacts" style={{color: "white"}}>
							<div className='tab-content'>
								<h2 className='title'>
									Contacts
								</h2>
								<div className='content'>
									Add, edit, remove, and manage your contacts
								</div>
							</div>
							<div className='tab-caret'>
								<img src={arrow} />
							</div>
						</Link>
					</div>
					<div className="account-menu__divider"></div>
					<div className='tab'>
						<Link to="/setting/security" style={{color: "white"}}>
							<div className='tab-content'>
								<h2 className='title'>
									Security & Privacy
								</h2>
								<div className='content'>
									Privacy settings and wallet Secret Recovery Phrase
								</div>
							</div>
						</Link>
						<div className='tab-caret'>
							<img src={arrow} />
						</div>
					</div>
					<div className="account-menu__divider"></div>
					<div className='tab'>
						<Link to="/setting/alerts" style={{color: "white"}}>
							<div className='tab-content'>
								<h2 className='title'>
									Alerts
								</h2>
								<div className='content'>
									Enable or disable each alert
								</div>
							</div>
							<div className='tab-caret'>
								<img src={arrow} />
							</div>
						</Link>
					</div>
					<div className="account-menu__divider"></div>
					<div className='tab'>
						<Link to="/setting/networks" style={{color: "white"}}>
							<div className='tab-content'>
								<h2 className='title'>
									Networks
								</h2>
								<div className='content'>
									Add and edit custom RPC networks
								</div>
							</div>
							<div className='tab-caret'>
								<img src={arrow} />
							</div>
						</Link>
					</div>
					<div className="account-menu__divider"></div>
					<div className='tab'>
						<Link to="/setting/experimental" style={{color: "white"}}>
							<div className='tab-content'>
								<h2 className='title'>
									Experimental
								</h2>
								<div className='content'>
									Token detection & more
								</div>
							</div>
							<div className='tab-caret'>
								<img src={arrow} />
							</div>
						</Link>
					</div>
					<div className="account-menu__divider"></div>
					<div className='tab'>
						<Link to="/setting/about" style={{color: "white"}}>
							<div className='tab-content'>
								<h2 className='title'>
									About
								</h2>
								<div className='content'>
									Version, support center, and contact info
								</div>
							</div>
							<div className='tab-caret'>
								<img src={arrow} />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
		
	</>
}

export default Land;