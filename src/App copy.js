import React from 'react';
import './App.css';
import { Card, Page, Heading, Subheading, DisplayText, TextContainer } from '@shopify/polaris';
import Checkbox from './components/Checkbox';
import DefaultTextField from './components/DefaultTextField';

export default function DataTableExample() {
	return (
		<Page title="Flash SMS">
			<div style={{ display: 'flex', margin: '0' }}>
				<div style={{ width: '40rem', marginRight: '1rem' }}>
					<Card>
						<div style={{ padding: '3rem', width: '35rem' }}>
							<DefaultTextField label="Admin Phone No." type="text" maxLength="10" />
						</div>
					</Card>
				</div>
				<div style={{ width: '40rem', marginLeft: '1rem' }}>
					<Card>
						<div style={{ padding: '3rem', width: '35rem' }}>
							<DefaultTextField elpText label="Sender ID" type="text" maxLength="6" />
						</div>
					</Card>
				</div>
			</div>

			<br />

			<div>
				<div style={{ marginBottom: '5px' }}>
					<DisplayText size="medium">SMS Notification Prefrence</DisplayText>
				</div>
				<Card>
					<div style={{ padding: '2rem' }}>
						<DisplayText size="small">Orders</DisplayText>
						<hr />

						<div style={{ display: 'flex' }}>
							<div style={{ marginRight: '1rem', width: '20rem' }}>
								<Heading>Create </Heading>
							</div>

							<div style={{ width: '24rem' }}>
								<Checkbox label="Notify Customer" />
							</div>
							<Checkbox label="Notify Admin" />
						</div>
						<div style={{ display: 'flex' }}>
							<div style={{ marginRight: '1rem', width: '20rem' }}>
								<Heading>Cancelled </Heading>
							</div>

							<div style={{ width: '24rem' }}>
								<Checkbox label="Notify Customer" />
							</div>
							<Checkbox label="Notify Admin" />
						</div>
						<div style={{ display: 'flex' }}>
							<div style={{ marginRight: '1rem', width: '20rem' }}>
								<Heading>Fulfilled </Heading>
							</div>

							<div style={{ width: '24rem' }}>
								<Checkbox label="Notify Customer" />
							</div>
							<Checkbox label="Notify Admin" />
						</div>
						<div style={{ display: 'flex' }}>
							<div style={{ marginRight: '1rem', width: '20rem' }}>
								<Heading>Partially Fulfilled </Heading>
							</div>

							<div style={{ width: '24rem' }}>
								<Checkbox label="Notify Customer" />
							</div>
							<Checkbox label="Notify Admin" />
						</div>
						<div style={{ display: 'flex' }}>
							<div style={{ marginRight: '1rem', width: '20rem' }}>
								<Heading>Paid </Heading>
							</div>

							<div style={{ width: '24rem' }}>
								<Checkbox label="Notify Customer" />
							</div>
							<Checkbox label="Notify Admin" />
						</div>

						<br />
						<DisplayText size="small">Customers Account</DisplayText>
						<hr />

						<div style={{ display: 'flex' }}>
							<div style={{ marginRight: '1rem', width: '20rem' }}>
								<Heading>Create </Heading>
							</div>

							<div style={{ width: '24rem' }}>
								<Checkbox label="Notify Customer" />
							</div>
							<Checkbox label="Notify Admin" />
						</div>
						<br />
						<DisplayText size="small">Refund</DisplayText>
						<hr />

						<div style={{ display: 'flex' }}>
							<div style={{ marginRight: '1rem', width: '20rem' }}>
								<Heading>Create </Heading>
							</div>

							<div style={{ width: '24rem' }}>
								<Checkbox label="Notify Customer" />
							</div>
							<Checkbox label="Notify Admin" />
						</div>
					</div>
				</Card>
			</div>

			<TextContainer>
				<DisplayText size="small">What is Sender ID?</DisplayText>
				<p>
					Manage your Shopify store on-the-go with real-time notifications, access to your dashboard, and order
					management, all from your smartphone.
				</p>
				<p>
					Shopify POS is the fastest and easiest way to start accepting Visa, Mastercard, American Express, and Discover
					right from your smartphone or tablet.
				</p>
			</TextContainer>
		</Page>
	);
}
