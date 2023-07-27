import { Typography } from "antd";
import Input from "antd/lib/input/Input";
import { useFormikContext } from "formik";
import React from "react";

export default function FormikTextField({ name, label, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors, values } =
    useFormikContext();

  return (
    <div style={{ margin: "0.6rem 0" }}>
      <div style={{ marginLeft: "0.2rem" }}>
        <Typography.Text level={5}>{label}:</Typography.Text>
      </div>
      <div>
        <Input
          name={name}
          // status={touched[name] ? "error" : null}
          onChange={handleChange(name)}
          onBlur={() => setFieldTouched(name)}
          value={values[name]}
          size="large"
          {...otherProps}
        />
      </div>
      <div style={{ marginLeft: "0.2rem" }}>
        {touched[name] ? (
          <Typography.Text type="danger">{errors[name]}</Typography.Text>
        ) : null}
      </div>
    </div>
  );
}
