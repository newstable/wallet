import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from "../Layout/header"

const Networks = () => {
	return <>
	<Layout>
		<div className='network-setting'>
			<div className="card">
				<h2 
					style={{textAlign:'center'}}
				>
					Networks
				</h2>
				<p>Network Name</p>
				<input 
					type="text" 
					className='input-password w100'
					placeholder='Ethereum MainNet'
				/>
				<p>New RPC Url</p>
				<input 
					type="text" 
					className='input-password w100'
					placeholder='https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
				/>
				<p>Chain ID</p>
				<input 
					type="text" 
					className='input-password w100'
					placeholder='3'
				/>
				<p>Currency Symbol (Optional)</p>
				<input 
					type="text" 
					className='input-password w100'
					placeholder='ETH'
				/>
				<p>Block Explorer URL (Optional)</p>
				<input 
					type="text" 
					className='input-password w100'
					placeholder='https://etherscan.io'
				/>
				<div className='button-group'>
					<div className="">
						<Link className='btn-puc btn-puc-cancel'  to="/home"  >Cancel</Link>	
					</div>
					<div className="">
						<Link className='btn-puc'  to="/home"  >Create</Link>	
					</div>
				</div>
			</div>
		</div>
	</Layout>
	</>
}

export default Networks;