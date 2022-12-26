import PropTypes from "prop-types";

export default function TR({ dataRow }) {
  return (
    <tr>
      {Object.values(dataRow).map((item, index) => (
        <td key={index}>
          {item.length > 24 ? item.substring(0, 24) + "..." : item}
        </td>
      ))}
    </tr>
  );
}

TR.propTypes = {
  dataRow: PropTypes.objectOf(PropTypes.string).isRequired,
};
