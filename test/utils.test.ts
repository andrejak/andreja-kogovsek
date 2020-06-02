import { getYear } from "../lib/utils";

describe("getYear", () => {
  it("Extracts the year from a string that looks like a year", () => {
    expect(getYear("1991-01-01")).toEqual("1991");
  });
});
