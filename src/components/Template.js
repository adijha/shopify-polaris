import React, { useCallback, useState } from 'react';
import { Card, Tabs, Page } from '@shopify/polaris';
import Template2 from './Template2';
import History from './History';

export default function Tenp() {
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
				return <Template2 />;
				break;
			case 'Edit Template':
				// return <Template />;
				break;
			case 'Buy More SMS':
				return <History />;
				break;

			default:
				break;
		}
	};

	return (
		<Page>
			<Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
				<Card.Section>
					{tabChangeHandler()}

					{/* <Settings /> */}
				</Card.Section>
			</Tabs>
		</Page>
	);
}
