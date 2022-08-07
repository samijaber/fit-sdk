import FitParser from "../../src/fit-parser.js";
import { describe, expect, it } from "vitest";
import fs from "fs";

describe("fit parser tests (Structured Workouts)", function () {
  it("check test-1", () => {
    const fitParser = new FitParser();
    const buffer = fs.readFileSync("./test/structured-workouts/test-1.fit");
    const fitObject = fitParser.parse(buffer);
    expect(fitObject).toMatchSnapshot();
  });

  it("check test-2", () => {
    const fitParser = new FitParser();
    const buffer = fs.readFileSync("./test/structured-workouts/test-2.fit");
    const fitObject = fitParser.parse(buffer);
    expect(fitObject).toMatchSnapshot();
  });
});
