import React, { Component } from "react";
import styles from "../phoneInput/styles.module.scss";
import CountrySelect from "./CountrySelect";
import Input from "./Input";
import InputStateContainer from "./InputStateContainer";

const Extension = ({ code, ...props }) => (
  <span className={props.className}>+{code}</span>
);

class PhoneInput extends Component {
  static defaultProps = {
    countrySelectClass: styles.selectContainer,
    inputClass: styles.input,
    wrapperClass: styles.wrapper,
    extensionClass: styles.extension,
    initialValues: {
      country: "US",
    },
  };

  render() {
    const { ...props } = this.props;

    return (
      <InputStateContainer
        initialValues={props.initialValues}
        value={props.value}
        formatOutput={props.formatOutput}
        onChange={props.onChange}
        render={(inputProps) => (
          <div className={props.wrapperClass}>
            <CountrySelect
              className={props.countrySelectClass}
              countryList={props.countryList}
              country={inputProps.country}
              onChange={inputProps.onSelectChange}
            />
            <Extension
              className={props.extensionClass}
              code={inputProps.code}
            />
            <Input
              className={props.inputClass}
              value={inputProps.input}
              onChange={inputProps.onInputChange}
            />
          </div>
        )}
      />
    );
  }
}
export default PhoneInput;
