import { ParsedArgs } from "minimist";

export interface TouchInterface {
  execute(params: ParsedArgs): void;
}

export interface LsInterface {
  execute(params: ParsedArgs): void;
}

export type CommandUnionType = TouchInterface | LsInterface;
