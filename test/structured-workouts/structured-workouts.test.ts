import FitParser from "../../src/fit-parser.js";
import { describe, expect, it } from "vitest";
import fs from "fs";

describe("fit parser tests (Structured Workouts)", function () {
  it("check test-1", () =>
    new Promise((done) => {
      const fitParser = new FitParser({ force: true });
      fs.readFile("./test/structured-workouts/test-1.fit", (err, buffer) => {
        if (err) {
          throw err;
        }
        fitParser.parse(buffer, (fitError, fitObject) => {
          if (fitError) {
            throw "Error parsing";
          }
          console.log(fitObject);
          expect(fitObject).toMatchSnapshot();
          done(true);
        });
      });
    }));

  it("check test-2", () =>
    new Promise((done) => {
      const fitParser = new FitParser({ force: true });
      fs.readFile("./test/structured-workouts/test-2.fit", (err, buffer) => {
        if (err) {
          throw err;
        }
        fitParser.parse(buffer, (fitError, fitObject: any) => {
          if (fitError) {
            throw "Error parsing";
          }
          console.log(fitObject);
          expect(fitObject).toMatchSnapshot();
          done(true);
        });
      });
    }));
});
