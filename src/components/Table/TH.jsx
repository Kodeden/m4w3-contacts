import PropTypes from "prop-types";
import startCase from "lodash.startcase";

export default function TH({ headers }) {
  return (
    <thead className="border border-gray-500 bg-gray-300 text-gray-700">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="p-4 text-left ">
            {startCase(header)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

TH.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
