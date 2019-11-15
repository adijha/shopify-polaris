import React from 'react';
import { EmptyState } from '@shopify/polaris';

export default class App extends React.Component {
	render() {
	
		function myFunction() {
			var x = document.getElementById('snackbar');
			x.className = 'show';
			setTimeout(function() {
				x.className = x.className.replace('show', '');
			}, 2000);
		}
		return (
			<div>
				<div id="snackbar">Template Updated for {} </div>
				<div className="btn btn-primary" onClick={myFunction}>
					click here
				</div>
			</div>
		);
	}
}
