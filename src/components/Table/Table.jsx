import usePagination from "@/hooks/usePagination";
import { useOutletContext } from "react-router-dom";
import TBody from "./TBody";
import TH from "./TH";

export default function Table() {
  const { tableData } = useOutletContext();
  const { currentData, maxPage, dispatchPagination } = usePagination(tableData);

  const headers = Object.keys(tableData[0]);

  return (
    <table className="container mx-auto max-w-max table-fixed md:table-auto">
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
