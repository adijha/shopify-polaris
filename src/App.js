import React, { useCallback, useState } from 'react';
import { Card, Tabs } from '@shopify/polaris';
import Setting from './components/Setting';

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
			content: 'Accepts marketing',
			panelID: 'accepts-marketing-content'
		},
		{
			id: 'repeat-customers',
			content: 'Repeat customers',
			panelID: 'repeat-customers-content'
		},
		{
			id: 'prospects',
			content: 'Prospects',
			panelID: 'prospects-content'
		}
	];

	const tabChangeHandler = (params) => {
		switch (tabs[selected].content) {
			case 'Settings':
				return <Setting />;
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
