import { getYear } from "../lib/utils";

describe("getYear", () => {
  it("Extracts the year from a string that looks like a year", () => {
    expect(getYear("1991-01-01")).toEqual(1991);
  });
  it("Handles the case of an empty string'", () => {
    expect(getYear("")).toBeUndefined();
  });
  it("Handles the case a string that's too short'", () => {
    expect(getYear("199")).toBeUndefined();
  });
  it("Handles the case a string that doesn't start with numbers", () => {
    expect(getYear("bla bla")).toBeUndefined();
  });
});
