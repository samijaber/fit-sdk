import { getMessageName, FitMessageNumber, FIT } from "./fit";
import { Attributes } from "./types";

export function getFitMessage<N extends FitMessageNumber>(messageNum: N) {
  return {
    name: getMessageName(messageNum),
    getAttributes: (fieldNum: number): Attributes => {
      const message = FIT.messages?.[messageNum];
      const attributes = message?.[fieldNum];
      // @ts-ignore
      return attributes || {};
    },
  };
}

// TODO
export function getFitMessageBaseType(foo: any) {
  return foo;
}
