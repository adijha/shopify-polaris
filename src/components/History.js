import React from 'react';
import {EmptyState} from '@shopify/polaris';

export default class App extends React.Component {
  render() {
    return (
      <EmptyState
  heading="Manage your inventory transfers"
  action={{content: 'Add transfer'}}
  secondaryAction={{content: 'Learn more', url: 'https://help.shopify.com'}}
  image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
>
  <p>Track and receive your incoming inventory from suppliers.</p>
</EmptyState>
    );
  }
}
