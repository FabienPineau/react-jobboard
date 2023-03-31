import { useState } from "react";

const useForm = (params) => {
  const [values, setValues] = useState(params?.initialValues || {});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e, action) => {
    e.preventDefault();
    action(values);
  };

  const as = (name) => {
    return {
      name,
      id: name,
      onChange,
      placeholder: "Job " + name,
      value: values[name]
    };
  };

  return { as, handleSubmit, onChange, values };
};

export default useForm;
