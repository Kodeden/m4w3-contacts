import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function TR({ dataRow, id }) {
  return (
    <tr>
      {Object.values(dataRow).map((item, index) => (
        <td key={index} className="truncate px-4">
          <Link to={id}>
            {" "}
            {item.length > 24 ? item.substring(0, 24) + "..." : item}
          </Link>
        </td>
      ))}
    </tr>
  );
}

TR.propTypes = {
  dataRow: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};
