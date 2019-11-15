import React, { useCallback, useState } from "react";
import { TextField } from "@shopify/polaris";

export default function DefaultTextField(props) {
  const [value, setValue] = useState("");

  const handleChange = useCallback(newValue => {
    setValue(newValue);
    console.log(newValue);
  }, []);

  return (
    <TextField
      label={props.label}
      value={value}
      onChange={handleChange}
      type={props.type}
      maxLength={props.maxLength}
      name={props.name}
      showCharacterCount
    />
  );
}
