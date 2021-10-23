import emojiFlags from "emoji-flags";

const CountrySelect = (props) => (
  <label className={props.className}>
    <span>{emojiFlags.countryCode(props.country).emoji}</span>
    <select value={props.country} onChange={props.onChange}>
      {props.countryList.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  </label>
);

export default CountrySelect;
