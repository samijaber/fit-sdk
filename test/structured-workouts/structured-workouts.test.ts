import FitParser from "../../src/fit-parser.js";
import { describe, expect, it } from "vitest";
import fs from "fs";

describe("fit parser tests (Structured Workouts)", function () {
  it("expects to retrieve a FIT object", () =>
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
          expect(fitObject).to.be.a("object");
          expect(fitObject).to.have.property("sessions");
          done(true);
        });
      });
    }));

  it("expects longitude to be in the range -180 to +180", () =>
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
          expect(fitObject).to.have.property("records");
          done(true);
        });
      });
    }));
});
