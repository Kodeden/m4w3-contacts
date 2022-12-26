import usePagination from "@/hooks/usePagination";
import PropTypes from "prop-types";
import TBody from "./TBody";
import TH from "./TH";

export default function Table({ headers, data }) {
  const { currentData, currentPage, maxPage, dispatchPagination } =
    usePagination(data);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === maxPage;

  return (
    <table className="container mx-auto max-w-max table-auto">
      <TH headers={headers} />
      <TBody data={currentData} />
      <tfoot>
        <tr>
          <td colSpan={headers.length} className="text-center [&>*]:mx-4">
            <button
              className={isFirstPage ? "text-gray-500" : "text-blue-500"}
              disabled={isFirstPage}
              onClick={() => dispatchPagination({ type: "PREV" })}
            >
              Previous
            </button>

            <button
              className={isLastPage ? "text-gray-500" : "text-blue-500"}
              disabled={isLastPage}
              onClick={() => dispatchPagination({ type: "NEXT" })}
            >
              Next
            </button>

            <span>
              {currentPage} / {maxPage}
            </span>
          </td>
        </tr>
      </tfoot>
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
