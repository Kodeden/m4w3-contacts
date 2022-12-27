import { useReducer } from "react";
import { getCurrentData } from "../utils/pagination";

function reducer(state, action) {
  const currentData = getCurrentData({ ...state, currentPage: action.payload });

  return {
    ...state,
    currentData,
    currentPage: action.payload,
  };
}

export default function usePagination(data, itemsPerPage = 10) {
  const [pagination, dispatchPagination] = useReducer(reducer, {
    currentData: data.slice(0, itemsPerPage),
    data,
    itemsPerPage,
  });

  const maxPage = Math.ceil(data.length / itemsPerPage);
  const { currentData } = pagination;

  return { currentData, maxPage, dispatchPagination };
}
