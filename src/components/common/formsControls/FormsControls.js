import React from "react";
import { Field } from "redux-form";
import classes from "./FormsController.module.css";
//props содержат все кроме input и meta

const FormControl = ({ input, meta : {touched, error}, children, }) => {
  const hasError = touched && error;

  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restprops } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restprops} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restprops } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restprops} />
    </FormControl>
  );
};

export const CreateField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    {" "}
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validators}
      {...props}
    /> {text}
  </div>
);
