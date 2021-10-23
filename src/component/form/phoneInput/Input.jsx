import React from "react";

const Input = (props) => (
  <input
    className={props.className}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    type="text"
  />
);

Input.defaultProps = {
  placeholder: "Phone number",
};

export default Input;
