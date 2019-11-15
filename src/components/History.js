import React, { useState, useEffect } from 'react';
import { DescriptionList } from '@shopify/polaris';
import axios from 'axios';

export default function History(props) {
	const [ history, setHistory ] = useState([]);

	const smsHistory = () => {
		axios.get('/api/history/').then((res) => {
			console.log('history', res.data);
			setHistory(res.data);
		});
	};

	useEffect(() => {
		smsHistory();
	}, []);

	return (
		<DescriptionList
			items={[
				{
					term: 'Logistics',
					description:
						'The management of products or other resources as they travel between a point of origin and a destination.'
				},
				{
					term: 'Sole proprietorship',
					description: 'A business structure where a single individual both owns and runs the company.'
				},
				{
					term: 'Discount code',
					description:
						'A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.'
				}
			]}
		/>
	);
}
