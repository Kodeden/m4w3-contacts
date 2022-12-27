import { useReducer } from "react";
import { getCurrentData, getCurrentPage } from "../utils/pagination";

function reducer(state, action) {
  // Was the page number provided?
  const currentPage =
    action.payload || getCurrentPage(state.currentPage, action.type);
  const currentData = getCurrentData(state, currentPage);

  switch (action.type) {
    case "GOTO":
      return {
        ...state,
        currentData,
        currentPage: action.payload,
      };
    case "NEXT":
    case "PREV":
      return {
        ...state,
        currentData,
        currentPage,
      };
  }
}

export default function usePagination(data, itemsPerPage = 10) {
  const [pagination, dispatchPagination] = useReducer(reducer, {
    currentPage: 1,
    currentData: data.slice(0, itemsPerPage),
    data,
    itemsPerPage,
  });

  const maxPage = Math.ceil(data.length / itemsPerPage);
  const { currentData, currentPage } = pagination;

  return { currentData, currentPage, maxPage, dispatchPagination };
}
