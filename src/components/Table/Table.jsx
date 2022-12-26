import PropTypes from "prop-types";
import TH from "./TH";
import TR from "./TR";

export default function Table({ headers, data }) {
  return (
    <table>
      <TH headers={headers} />
      <tbody>
        {data.map((dataRow, index) => (
          <TR key={index} dataRow={dataRow} />
        ))}
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  headers: [],
  data: [],
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
