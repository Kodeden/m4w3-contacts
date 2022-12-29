export const getCurrentData = ({ currentPage, data, itemsPerPage }) => {
  const begin = (currentPage - 1) * itemsPerPage;
  const end = begin + itemsPerPage;

  return data.slice(begin, end);
};

export const getCurrentPage = (currentPage, operation) => {
  return operation === "NEXT"
    ? currentPage + 1
    : currentPage > 1
    ? currentPage - 1
    : currentPage;
};

export const getNavIds = (ids, currentId) => {
  const currentIndex = ids.indexOf(currentId);

  return {
    prevId: ids[currentIndex - 1] || ids[ids.length - 1],
    nextId: ids[currentIndex + 1] || ids[0],
  };
};
