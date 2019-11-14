import React, { useCallback, useState, Fragment } from 'react';
import { Checkbox } from '@shopify/polaris';

export default function CheckboxExample(props) {
	const [ checked, setChecked ] = useState(false);
	const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

	return (
		<Fragment>
			<Checkbox label={props.label} checked={checked} onChange={handleChange} />
		

		</Fragment>
	);
}
