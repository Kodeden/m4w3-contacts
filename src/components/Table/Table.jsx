import PropTypes from "prop-types";
import TBody from "./TBody";
import TH from "./TH";
import usePagination from "@/hooks/usePagination";

export default function Table({ headers, data }) {
  const { currentData } = usePagination(data);

  return (
    <table className="container mx-auto max-w-max table-auto">
      <TH headers={headers} />
      <TBody data={currentData} />
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
