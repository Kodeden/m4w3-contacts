import PropTypes from "prop-types";

export default function TH({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

TH.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
