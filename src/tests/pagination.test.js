import { getCurrentData, getCurrentPage } from "../utils/pagination";

it("should return the correct data for the current page", () => {
  const input = {
    currentPage: 1,
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    itemsPerPage: 3,
  };

  const expected = [1, 2, 3];
  const actual = getCurrentData(input);

  expect(actual).toEqual(expected);
});

it("should return the correct page number for the next page", () => {
  const currentPage = 1;
  const operation = "NEXT";

  const expected = 2;
  const actual = getCurrentPage(currentPage, operation);

  expect(actual).toEqual(expected);
});

it("should return the correct page number for the previous page", () => {
  const currentPage = 2;
  const operation = "PREV";

  const expected = 1;
  const actual = getCurrentPage(currentPage, operation);

  expect(actual).toEqual(expected);
});

it("should not return a page less than 1", () => {
  const currentPage = 1;
  const operation = "PREV";

  const expected = 1;
  const actual = getCurrentPage(currentPage, operation);

  expect(actual).toEqual(expected);
});
