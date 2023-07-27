import { Select, Typography } from "antd";
import { useFormikContext } from "formik";
import React from "react";

export default function FormikSelect({ name, label, data, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors, values } =
    useFormikContext();

  return (
    <div style={{ margin: "0.5rem 0" }}>
      <div style={{ marginLeft: "0.2rem" }}>
        <Typography.Text level={5}>{label}:</Typography.Text>
      </div>
      <Select
        style={{ width: "100%" }}
        showSearch
        size="large"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        name={name}
        // status={touched[name] ? "error" : null}
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        {...otherProps}
      >
        {data.map((d) => (
          <Select.Option key={d.value} value={d.value}>
            {d.name.toUpperCase()}
          </Select.Option>
        ))}
      </Select>
      <div style={{ marginLeft: "0.2rem" }}>
        {touched[name] ? (
          <Typography.Text type="danger">{errors[name]}</Typography.Text>
        ) : null}
      </div>
    </div>
  );
}
