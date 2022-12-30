import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function TR({ dataRow, id }) {
  return (
    <tr>
      {Object.values(dataRow).map((item, index) => (
        <td key={index} className="truncate px-4 first:text-blue-500">
          <Link to={id}>
            {" "}
            {item.length > 24 ? item.substring(0, 24) + "..." : item}
          </Link>
        </td>
      ))}
      <td className="px-4 text-orange-500">
        <Link to={`/edit/${id}`}>Edit</Link>
      </td>

      <td className="px-4 text-red-500">
        <Link to={`/delete/${id}`}>Delete</Link>
      </td>
    </tr>
  );
}

TR.propTypes = {
  dataRow: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};
