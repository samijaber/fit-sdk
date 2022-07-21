import FitParser from "../../src/fit-parser.js";
import { describe, expect, it } from "vitest";
import fs from "fs";

describe("Activity parser tests", function () {
  it("expects to retrieve a FIT object", () =>
    new Promise((done) => {
      const fitParser = new FitParser({ force: true });
      fs.readFile("./test/activity/test.fit", (err, buffer) => {
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
      fs.readFile("./test/activity/test2.fit", (err, buffer) => {
        if (err) {
          throw err;
        }
        fitParser.parse(buffer, (fitError, fitObject: any) => {
          if (fitError) {
            throw "Error parsing";
          }
          expect(fitObject).to.have.property("records");
          expect(
            fitObject.records
              .map((r: any) => r.position_long)
              .filter((l: any) => l > 180 || l < -180)
          ).to.be.empty;
          done(true);
        });
      });
    }));

  it("expects fit with developer data to be parsed", () =>
    new Promise((done) => {
      const fitParser = new FitParser({ force: true });
      fs.readFile(
        "./test/activity/running-with-developer-data.fit",
        (err, buffer) => {
          if (err) {
            throw err;
          }
          fitParser.parse(buffer, (fitError, fitObject: any) => {
            if (fitError) {
              throw "Error parsing";
            }
            expect(fitObject).to.have.property("records");
            expect(fitObject.records[0]).to.have.property("Ground Time");
            expect(fitObject.records[0]).to.have.property(
              "Vertical Oscillation"
            );
            expect(fitObject.records[0]).to.have.property("Elevation");
            done(true);
          });
        }
      );
    }));
});
