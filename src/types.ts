import { Fit } from "./fit";
export interface Attributes {
  field: string;
  type: string;
  scale: number | string | null;
  offset: number | string;
  units: string;
}

export interface Unit {
  multiplier: number;
  offset: number;
}

// interface Units {
//   [index: string]: Unit;
// }

// interface Message {
//   name: string;
//   [index: number]: Attributes;
// }

// interface Fit {
//   scConst: number;
//   options: {
//     speedUnits: Units;
//     lengthUnits: Units;
//     temperatureUnits: Units;
//   };
//   messages: {
//     [index: number]: Message;
//   };
//   types: {
//     [index: string]: {
//       [index: number]: string | number;
//     };
//   };
// }

export interface FitParserOptions {
  force: boolean;
  speedUnit: keyof Fit["options"]["speedUnits"];
  lengthUnit: keyof Fit["options"]["lengthUnits"];
  temperatureUnit: keyof Fit["options"]["temperatureUnits"];
  elapsedRecordField: boolean;
  mode: "cascade" | "list" | "both";
}
