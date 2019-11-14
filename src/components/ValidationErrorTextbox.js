import React, {useCallback, useState} from 'react';
import {TextField} from '@shopify/polaris';

export default function ValidationErrorTextbox() {
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <TextField
      label="Store name"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      error="Store name is required"
    />
  );
}
