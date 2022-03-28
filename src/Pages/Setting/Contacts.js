import React, {useState} from 'react';
import {Link} from "react-router-dom"; 

import Layout from '../Layout/header';

import "./setting.scss";
const Contacts = () => {
	const [toggle, setToggle] = useState(false);
	return <>
		<Layout>
			<div className='setting-general'>
				<div className="card">
					<h2 
						style={{textAlign:'center'}}
					>
						Contacts
					</h2>
					<div className='contacts-container'>
						<div 
							className='contacts-content' 
							style={{width: (!toggle ? "100%" : "")}}
						>
							<div className='recent'>Recent</div>
							<div className='contacts-group' >
								<div className='contacts-item' onClick={() => setToggle(!toggle)}>
									<div>
										<svg style={{borderRadius: "50%"}} x="0" y="0" width="28" height="28">
											<rect x="0" y="0" width="28" height="28" transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)" fill="#FB1877"></rect><rect x="0" y="0" width="28" height="28" transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)" fill="#C8145F"></rect>
											<rect x="0" y="0" width="28" height="28" transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)" fill="#03595E">
											</rect>
											</svg>
									</div>
									<div className='item-name' onClick={() => setToggle(!toggle)}>0x1987...7621</div>
								</div>
								<div className='contacts-item'>
									<div>
										<svg style={{borderRadius: "50%"}} x="0" y="0" width="28" height="28">
											<rect x="0" y="0" width="28" height="28" transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)" fill="#FB1877"></rect><rect x="0" y="0" width="28" height="28" transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)" fill="#C8145F"></rect>
											<rect x="0" y="0" width="28" height="28" transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)" fill="#03595E">
											</rect>
											</svg>
									</div>
									<div className='item-name' onClick={() => setToggle(!toggle)}>0x1987...7621</div>
								</div>
								<div className='contacts-item'>
									<div>
										<svg style={{borderRadius: "50%"}} x="0" y="0" width="28" height="28">
											<rect x="0" y="0" width="28" height="28" transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)" fill="#FB1877"></rect><rect x="0" y="0" width="28" height="28" transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)" fill="#C8145F"></rect>
											<rect x="0" y="0" width="28" height="28" transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)" fill="#03595E">
											</rect>
											</svg>
									</div>
									<div className='item-name'>0x1987...7621</div>
								</div>
							</div>
						</div>
						{
							toggle ? (
								<div className='contacts-detail'>
									<div className='contacts-detail-container'>
										<div className="identicon" style={{height: "60px", width: "60px", borderRadius: "30px"}}>
											<div style={{borderRadius: "50px", overflow: "hidden", padding: "0px", margin: "0px", width: "60px", height: "60px", display: "inline-block", background: "rgb(1, 142, 133)"}}>
												<svg x="0" y="0" width="60" height="60"><rect x="0" y="0" width="60" height="60" transform="translate(-0.5768608352676097 -0.8952736805691172) rotate(294.6 30 30)" fill="#FB1877"></rect><rect x="0" y="0" width="60" height="60" transform="translate(-5.86061438560766 37.05318784669233) rotate(113.2 30 30)" fill="#C8145F"></rect><rect x="0" y="0" width="60" height="60" transform="translate(-32.74006781710832 37.3367762257452) rotate(188.3 30 30)" fill="#03595E"></rect></svg>
											</div>
										</div>
										
										<div className="general-content-item">
											<button className='sucess-button' style={{padding: "10px 40px", marginTop: "20px"}}>Edit</button>
										</div>
										<div className="general-content-item" style={{marginTop: "20px"}}>
											<p>Ethereum Public Address</p>
											<p className="general-content-description">0x 1987 046E 1342 D8F5 C00A 1e84 3707 BCe7 D14C 7621</p>
											<p className="general-content-description">Memo</p>
										</div>
									</div>
								</div>
							) : (
								""
							)
						}
						
					</div>
				</div>
			</div>
		</Layout>
	</>
}

export default Contacts;