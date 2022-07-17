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

export interface Units {
  [index: string]: Unit;
}

export interface Message {
  name: string;
  [index: number]: Attributes;
}

export interface Fit {
  scConst: number;
  options: {
    speedUnits: Units;
    lengthUnits: Units;
    temperatureUnits: Units;
  };
  messages: {
    [index: number]: Message;
  };
  types: {
    [index: string]: {
      [index: number]: string | number;
    };
  };
}

export interface FitParserOptions {
  force?: any;
  speedUnit?: any;
  lengthUnit?: any;
  temperatureUnit?: any;
  elapsedRecordField?: any;
  mode?: any;
}
