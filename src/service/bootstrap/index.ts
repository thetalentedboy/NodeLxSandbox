import { inject, injectable } from "inversify";
import { BootstrapInterface } from "../../types/bootstrap";
import { CommandExecutorInterface } from "../../types";
import { IDENTIFIER } from "../../constants/identifiers";
import readline, { ReadLine } from "readline";
@injectable()
export class Bootstrap implements BootstrapInterface {
  @inject(IDENTIFIER.COMMANDEXECUTOR)
  private commandExecutor: CommandExecutorInterface;
  private readonly rl: ReadLine;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start(): void {
    this.rl.question("> ", (command) => {
      if (command.toLowerCase() === "exit") {
        this.rl.close();
        return;
      }
      this.commandExecutor.execute(command);
      this.start();
    });
  }
}
