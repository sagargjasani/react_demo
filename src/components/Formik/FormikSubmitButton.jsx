import React from "react";
import { useFormikContext } from "formik";
import { Button } from "antd";

export default function FormikSubmitButton({ title, loading, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      <Button
        type="primary"
        block
        onClick={handleSubmit}
        loading={loading}
        {...otherProps}
      >
        {title}
      </Button>
    </>
  );
}
