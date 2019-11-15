import React, { useCallback, useState, Fragment } from 'react';
import { Checkbox } from '@shopify/polaris';

export default function CheckboxExample(props) {
	const [checked, setChecked] = useState(false);
	
	const [group, setGroup] = useState({})
	const handleChange = useCallback((newChecked) =>
		setChecked(newChecked),

		[]);

	return (
		<Fragment>
			<Checkbox label={props.label} name={props.name} checked={checked} onChange={handleChange} />
		</Fragment>
	);
}
