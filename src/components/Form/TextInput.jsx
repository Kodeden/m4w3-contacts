import startCase from "lodash.startcase";
import PropTypes from "prop-types";

export default function TextInput({
  defaultValue,
  label,
  id,
  pattern,
  placeholder,
  type,
}) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {startCase(label) || startCase(id)}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        // All fields are required by default
        required
        pattern={pattern || null}
        placeholder={placeholder || startCase(id)}
        defaultValue={defaultValue}
      />
    </>
  );
}

TextInput.defaultProps = {
  type: "text",
};

TextInput.propTypes = {
  defaultValue: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  pattern: PropTypes.oneOfType([
    PropTypes.instanceOf(RegExp),
    PropTypes.string,
  ]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
