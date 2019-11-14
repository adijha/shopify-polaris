import React, { useCallback, useState } from 'react';
import { Card, Tabs } from '@shopify/polaris';
import Setting from './components/Setting';
import Template from './components/Template';

export default function TabsExample() {
	const [ selected, setSelected ] = useState(0);

	const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), []);

	const tabs = [
		{
			id: 'all-customers',
			content: 'Settings',
			accessibilityLabel: 'All customers',
			panelID: 'all-customers-content'
		},
		{
			id: 'accepts-marketing',
			content: 'Edit Template',
			panelID: 'accepts-marketing-content'
		},
		{
			id: 'repeat-customers',
			content: 'Buy More SMS',
			panelID: 'repeat-customers-content'
		}
	];

	const tabChangeHandler = (params) => {
		switch (tabs[selected].content) {
			case 'Settings':
				return <Setting />;
				break;
			case 'Edit Template':
				return <Template />;
				break;
			case 'Buy More SMS':
				return <p>Buy More SMS</p>;
				break;

			default:
				break;
		}
	};

	return (
		<Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
			<Card.Section title={tabs[selected].content}>
				{tabChangeHandler()}

				{/* <Settings /> */}
			</Card.Section>
		</Tabs>
	);
}
