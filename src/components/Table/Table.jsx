import usePagination from "@/hooks/usePagination";
import PropTypes from "prop-types";
import TBody from "./TBody";
import TH from "./TH";

export default function Table({ headers, data }) {
  const { currentData, maxPage, dispatchPagination } = usePagination(data);

  return (
    <table className="container mx-auto max-w-max table-auto">
      <TH headers={headers} />
      <TBody data={currentData} />
      <tfoot>
        <tr>
          <td colSpan={headers.length} className="text-center [&>*]:mx-4">
            <label htmlFor="page" className="sr-only">
              Page
            </label>
            <input
              id="page"
              className="w-24 font-medium text-sky-700"
              type="number"
              placeholder="1"
              onInput={() => {
                const page = Number(event.target.value);
                if (page >= 1 && page <= maxPage) {
                  dispatchPagination({ payload: page });
                }
              }}
            />
            &nbsp;/&nbsp;{maxPage}
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
