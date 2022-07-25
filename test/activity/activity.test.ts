import FitParser from "../../src/fit-parser.js";
import { describe, expect, it } from "vitest";
import fs from "fs";

describe("Activity parser tests", function () {
  it("expects to retrieve a FIT object", () => {
    const fitParser = new FitParser({ force: true });
    const buffer = fs.readFileSync("./test/activity/test.fit");
    const fitObject = fitParser.parse(buffer);
    expect(fitObject).to.be.a("object");
    expect(fitObject).to.have.property("sessions");
  });

  it("expects longitude to be in the range -180 to +180", () => {
    const fitParser = new FitParser({ force: true });
    const buffer = fs.readFileSync("./test/activity/test2.fit");
    const fitObject = fitParser.parse(buffer);
    expect(fitObject).to.have.property("records");
    expect(
      fitObject.records
        .map((r: any) => r.position_long)
        .filter((l: any) => l > 180 || l < -180)
    ).to.be.empty;
  });

  it("expects fit with developer data to be parsed", () => {
    const fitParser = new FitParser({ force: true });
    const buffer = fs.readFileSync(
      "./test/activity/running-with-developer-data.fit"
    );

    const fitObject = fitParser.parse(buffer);
    expect(fitObject).to.have.property("records");
    expect(fitObject.records[0]).to.have.property("Ground Time");
    expect(fitObject.records[0]).to.have.property("Vertical Oscillation");
    expect(fitObject.records[0]).to.have.property("Elevation");
  });
});
