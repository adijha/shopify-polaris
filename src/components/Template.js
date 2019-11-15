import React, { Fragment, useState } from 'react';
import { Button, Card } from '@shopify/polaris';

import axios from 'axios';

export default function Template(props) {
	let defaultTopic = {
		topic: 'orders/create',
		topicVariables: 'name vendor price order_id title'
	};

	const [ topics, setTopics ] = useState(defaultTopic);

	const sendTemplate = (tempObj) => {
		if (tempObj.customer && tempObj.admin && tempObj.topic) {
			console.log(tempObj);
			axios.post('/api/template', tempObj).then((res) => console.log(res)).catch((err) => console.error(err));
		} else {
			console.log(" couldn't know what happened");
		}
	};

	let tempObj = {
		topic: topics.topic,
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
			myFunction();
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

		if (audience == 'customer') {
			tempObj.customer = parameter;
		} else if (audience == 'admin') {
			tempObj.admin = parameter;
		} else {
			console.log('something went wrong ');
		}
		sendTemplate(tempObj);
	};

	const topicHandler = (params) => {
		const selectedElement = params.target;
		const selectedValue = selectedElement.innerHTML;
		switch (selectedValue) {
			case 'orders/create':
				setTopics({
					...topics,
					topic: selectedValue,
					topicVariables: 'name  vendor  price order_id title '
				});
				break;
			case 'orders/cancelled':
				setTopics({
					...topics,
					topic: selectedValue,
					topicVariables: 'name vendor price order_id title cancel_reason'
				});
				break;
			case 'orders/fulfilled':
				setTopics({
					...topics,
					topic: selectedValue,
					topicVariables: 'name vendor price order_id title fulfillment_status order_status_url'
				});
				break;
			case 'orders/partially_fulfilled':
				setTopics({
					...topics,
					topic: selectedValue,
					topicVariables: 'name vendor price order_id title fulfillment_status order_status_url'
				});
				break;
			case 'customers/create':
				setTopics({ ...topics, topic: selectedValue, topicVariables: 'name email phone' });
				break;
			case 'refunds/create':
				setTopics({ ...topics, topic: selectedValue, topicVariables: 'price order_id title' });
				break;

			default:
				break;
		}

		let selectedElementClass = selectedElement.className;

		if (selectedElementClass.includes('butti')) {
			return;
		} else {
			let firstElement = document.getElementsByClassName('butti');
			if (firstElement) {
				let first = firstElement[0];
				first.className = 'butt ';
			}

			if (selectedElementClass.includes('butt ')) {
				selectedElementClass = selectedElementClass.replace('butt', 'butti ');
				params.target.className = selectedElementClass;
			}
		}
	};
	function myFunction() {
		var x = document.getElementById('snackbar');
		x.className = 'show';
		setTimeout(function() {
			x.className = x.className.replace('show', '');
		}, 2000);
	}

	return (
		<Fragment>
			<h2>Select Topic</h2>

			<div id="snackbar">Template Updated for {topics.topic} </div>
			<br />
			<div className="bog col-md-12">
				<div className="butti " onClick={topicHandler}>
					orders/create
				</div>

				<div className="butt " onClick={topicHandler}>
					orders/cancelled
				</div>
				<div className="butt " onClick={topicHandler}>
					orders/fulfilled
				</div>
				{/* <div className="butt " onClick={topicHandler}>
					orders/partially_fulfilled
				</div>
				<div className="butt " onClick={topicHandler}>
					customers/create
				</div>
				<div className="butt " onClick={topicHandler}>
					refunds/create
				</div> */}
			</div>

			<div className="row ">
				<div className="col-sm-6">
					<div className="card mt-5 shadow">
						<Card>
							<div style={{ padding: '2rem' }}>
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
										Available Variables for {topics.topic}
									</p>
									<div id="places" style={{ wordSpacing: '50px', width: '120px' }}>
										{topics.topicVariables}
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>

				<div className="col-sm-6">
					<div className="card text-center mt-5 shadow">
						<Card>
							<div style={{ padding: '2rem' }}>
								<h5 className="card-title">Customer Message templete</h5>

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
								{/* <div style={{ textAlign: 'center' }} onClick={() => {}}>
								<Button primary>Show State</Button>
							</div>
							<div style={{ textAlign: 'center' }} onClick={myFunction}>
								<Button primary>Save Template</Button>
							</div> */}
								<div style={{ textAlign: 'center' }} onClick={saveTemplete}>
									<Button primary>Save Template</Button>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
