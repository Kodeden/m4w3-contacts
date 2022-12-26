import PropTypes from "prop-types";

export default function TR({ dataRow }) {
  return (
    <tr>
      {Object.values(dataRow).map((item, index) => (
        <td key={index}>{item}</td>
      ))}
    </tr>
  );
}

TR.propTypes = {
  dataRow: PropTypes.objectOf(PropTypes.string).isRequired,
};
