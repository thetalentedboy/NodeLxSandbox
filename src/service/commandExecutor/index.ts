import minimist from "minimist";
import { inject, injectable } from "inversify";
import { CommandExecutorInterface } from "../../types/commandExecutor";
import { COMMANDIDENTIFIER } from "../../constants/identifiers";
import {
  LsInterface,
  TouchInterface,
  CommandUnionType,
} from "../../types/service";

@injectable()
export class commandExecutor implements CommandExecutorInterface {
  public commandSet: Record<string, CommandUnionType> = {};

  constructor(
    @inject(COMMANDIDENTIFIER.LS) private ls: LsInterface,
    @inject(COMMANDIDENTIFIER.TOUCH) private touch: TouchInterface
  ) {
    this.commandSet.ls = ls;
    this.commandSet.touch = touch;
  }

  parseParams(commandString: string): string[] {
    return [""];
  }

  execute(commandString: string) {
    const argv = commandString.split(" ").slice(1);
    const command = commandString.split(" ")[0];
    const commandSet = minimist(argv);
  }
}
