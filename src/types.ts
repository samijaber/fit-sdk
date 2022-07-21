export interface Attributes {
  field: string;
  type: string;
  scale: number | string | null;
  offset: number | string;
  units: string;
}

// interface Unit {
//   multiplier: number;
//   offset: number;
// }

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
  force?: any;
  speedUnit?: any;
  lengthUnit?: any;
  temperatureUnit?: any;
  elapsedRecordField?: any;
  mode?: any;
}
