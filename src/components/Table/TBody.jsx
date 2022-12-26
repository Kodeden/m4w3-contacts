import usePagination from "@/hooks/usePagination";
import PropTypes from "prop-types";
import TR from "./TR";

export default function TBody({ data }) {
  const { currentData } = usePagination(data);

  return (
    <tbody>
      {currentData.map((dataRow) => (
        <TR key={dataRow.id} dataRow={dataRow} />
      ))}
    </tbody>
  );
}

TBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
