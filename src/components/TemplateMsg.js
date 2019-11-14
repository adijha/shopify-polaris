import React, { useCallback, useState, Fragment } from 'react';
import { TextField } from '@shopify/polaris';

export default function TemplateMsg() {
	const [ value, setValue ] = useState('');

	const handleChange = useCallback((newValue) => setValue(newValue), []);

  return (
    <Fragment>
      <TextField label="" value={value} onChange={handleChange} multiline focused={true} />
      console.log(value)
    </Fragment>
  );
}
