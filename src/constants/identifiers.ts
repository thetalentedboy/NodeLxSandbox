export const IDENTIFIER: { [key: string]: symbol } = {
  COMMANDEXECUTOR: Symbol.for("commandExecutor"),
  BOOTSTRAP: Symbol.for("bootstrap"),
};

export const COMMANDIDENTIFIER: { [key: string]: symbol } = {
  LS: Symbol.for("ls"),
  TOUCH: Symbol.for("touch"),
};
