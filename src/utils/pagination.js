export const getCurrentPage = (state, operation) => {
  return operation === "NEXT" ? state.currentPage + 1 : state.currentPage - 1;
};

export const getCurrentData = (state, currentPage) => {
  const begin = (currentPage - 1) * state.itemsPerPage;
  const end = begin + state.itemsPerPage;

  return state.data.slice(begin, end);
};
