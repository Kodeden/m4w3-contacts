import startCase from "lodash.startcase";
import PropTypes from "prop-types";

export default function TH({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="bg-slate-50 text-left text-slate-400">
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
