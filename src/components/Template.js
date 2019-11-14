import React, { Fragment } from 'react';
import { Button } from '@shopify/polaris';

import axios from 'axios';


export default function Template(props) {
	let temp = {
		topic: 'default/topic'
	};

	const sendTemplate = (tempObj) => {
		if (tempObj.customer && tempObj.admin && tempObj.topic) {
			console.log(tempObj);
			axios.post('/api/template', tempObj).then((res) => console.log(res)).catch((err) => console.error(err));
		} else {
			console.log(" couldn't know what happened");
		}
	};

	const variables = (params) => {
		switch (temp.topic) {
			case 'default/topic':
				return (
					<Fragment>
						You
						<br />
						break
						<br />
						the
						<br />
						rules
						<br />
					</Fragment>
				);
			case 'orders/create':
				return (
					<Fragment>
						TemplateMsgame
						<br />
						vendor
						<br />
						price
						<br />
						order_id
						<br />
						title
					</Fragment>
				);
			case 'orders/cancelled':
				return (
					<Fragment>
						name
						<br />
						vendor
						<br />
						price
						<br />
						order_id
						<br />
						title
						<br />
						cancel_reason
					</Fragment>
				);
			case 'orders/fulfilled':
				return (
					<Fragment>
						name
						<br />
						vendor
						<br />
						price
						<br />
						order_id
						<br />
						title
						<br />
						fulfillment_status
						<br />
						order_status_url
					</Fragment>
				);
			case 'orders/partially_fulfilled':
				return (
					<Fragment>
						name
						<br />
						vendor
						<br />
						price
						<br />
						order_id
						<br />
						title
						<br />
						fulfillment_status
						<br />
						order_status_url
					</Fragment>
				);
			case 'customers/create':
				return (
					<Fragment>
						name
						<br />
						phone
						<br />
						email
					</Fragment>
				);
			case 'refunds/create':
				return (
					<Fragment>
						price
						<br />
						order_id
						<br />
						title
					</Fragment>
				);
		}
	};

	let tempObj = {
		topic: temp.topic,
		customer: '',
		admin: ''
	};
	let finObj = {};

	const saveTemplete = () => {
		convertData({
			textareaId: 'inputTextArea-customer',
			audience: 'customer'
		});
		convertData({
			textareaId: 'inputTextArea-admin',
			audience: 'admin'
		});
	};

	const convertData = (param) => {
		let first = param.textareaId;

		let inputTextArea = document.getElementById(first);

		let strLength = 0;
		let luna = document.getElementById(first).className;
		var inputData = document.getElementById(first).value;
		if (inputData != '' && inputData != null) {
			inputData = inputData.replace(/(^\s*)|(\s*$)/gi, '');
			inputData = inputData.replace(/[ ]{2,}/gi, ' ');
			inputData = inputData.replace(/\n /, '\n');

			for (let i = 0; i < inputData.length; i++) {
				inputData = inputData.replace(' ', '%20');
				inputData = inputData.replace('(', '${');
				inputData = inputData.replace(')', '}');
				inputData = inputData.replace('\n', '%0A');
			}

			if (luna.indexOf('is-invalid') > -1) {
				strLength = luna.split(' ').length;
				for (let i = 0; i < strLength; i++) {
					luna = luna.replace('is-invalid', '');
				}

				inputTextArea.className = luna;
			}
		} else {
			luna = document.getElementById(first).className;
			luna = luna.concat(' ');
			luna = luna.concat('is-invalid');
			document.getElementById(first).className = luna;
		}
		showOutput(inputData, param.audience);
	};

	const showOutput = (parameter, audience) => {
		parameter = `\`${parameter}\``;
		// parameter = parameter;
		// console.log(audience, parameter);

		if (audience == 'customer') {
			tempObj.customer = parameter;
		} else if (audience == 'admin') {
			tempObj.admin = parameter;
		} else {
			console.log('something went wrong ');
		}
		// console.log(tempObj);
		sendTemplate(tempObj);
	};

	//show rule list

	return (
		<Fragment>
			<div className="container-fluid">
				<div className="row ">
					<div className="col-sm-6">
						<div className="card mt-5 shadow">
							<div className="card-body">
								<h5>SMS Template Rules</h5>

								<div style={{ textAlign: 'left', fontSize: '15px' }}>
									All the variables enclosed in "( )" will be replaced by actual values.
									<br />
									SMS length linit is 70 characters.
									<br />
									Enclose every variables with "( )"
									<br />
									<br />
									<p
										style={{
											fontSize: '16px',
											fontWeight: '500',
											color: '#444444'
										}}
									>
										Available Variables for {temp.topic}
									</p>
									{variables()}
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm-6">
						<div className="card text-center mt-5 shadow">
							<div className="card-body">
								<h5 className="card-title">Customer Message templete</h5>

								{/* <TemplateMsg /> */}

								<textarea
									className="form-control"
									id="inputTextArea-customer"
									placeholder="Enter customer message here"
									rows={5}
									required
									autoFocus
									defaultValue={''}
									style={{ fontSize: '15px' }}
								/>

								<hr />
								<h5 className="card-title">Admin Message Templete</h5>

								<textarea
									className="form-control"
									id="inputTextArea-admin"
									placeholder="Enter admin message here"
									rows={5}
									required
									autoFocus
									defaultValue={''}
									style={{ fontSize: '15px' }}
								/>
								<div className="invalid-feedback">Please enter Data in the textarea.</div>

								<br />
								<div style={{ textAlign: 'center' }} onClick={saveTemplete}>
									<Button primary>Save theme</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			;
		</Fragment>
	);
}
