import {
  getCountryCallingCode,
  parseIncompletePhoneNumber,
  formatIncompletePhoneNumber,
} from "libphonenumber-js";

class InputStateContainer extends Component {
  state = {
    country: this.props.initialValues.country,
    code: getCountryCallingCode(this.props.initialValues.country),
    input: formatIncompletePhoneNumber(
      this.props.value,
      this.props.initialValues.country
    ),
  };

  onSelectChange = (e) => {
    this.setState({
      country: e.target.value,
      code: getCountryCallingCode(e.target.value),
      input: formatIncompletePhoneNumber(this.state.input, e.target.value),
    });
  };

  onInputChange = (e) => {
    const { input } = this.state;

    const formattedValue = formatIncompletePhoneNumber(
      e.target.value,
      this.state.country
    );

    if (
      formattedValue === input &&
      formattedValue.indexOf(e.target.value) === 0
    ) {
      return this.setState({
        input: formattedValue.slice(0, -1),
      });
    }

    return this.setState({
      input: formattedValue,
    });
  };

  // componentDidMount() {
  //   this.props.onChange(this.props.formatOutput(this.state))
  // }

  componentDidUpdate(nextProps, nextState) {
    if (this.state.input !== nextState.input) {
      this.props.onChange(this.props.formatOutput(this.state));
    }
  }

  changeCountry = (e) => this.setState({ country: e.target.value });

  render() {
    const { render, ...props } = this.props;
    return render({
      changeCountry: this.changeCountry,
      onInputChange: this.onInputChange,
      onSelectChange: this.onSelectChange,
      format: this.format,
      ...this.state,
    });
  }
}

InputStateContainer.defaultProps = {
  initialValues: { country: "US" },
  formatOutput: (componentState) => {
    return parseIncompletePhoneNumber(
      componentState.code + componentState.input
    );
  },
};

export default InputStateContainer;
