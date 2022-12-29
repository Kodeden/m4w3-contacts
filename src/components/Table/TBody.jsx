import PropTypes from "prop-types";
import TR from "./TR";

export default function TBody({ data }) {
  return (
    <tbody>
      {data.map((dataRow) => (
        <TR key={dataRow.id} dataRow={dataRow} id={dataRow.id} />
      ))}
    </tbody>
  );
}

TBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
