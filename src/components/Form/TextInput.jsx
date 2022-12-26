import PropTypes from "prop-types";
import startCase from "lodash.startcase";

export default function TextInput({
  label,
  id,
  pattern,
  placeholder,
  required,
  type,
}) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label || id}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        required
        pattern={pattern || null}
        placeholder={placeholder || startCase(id)}
      />
    </>
  );
}

TextInput.defaultProps = {
  required: true,
  type: "text",
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  pattern: PropTypes.instanceOf(RegExp),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};
