import { inject, injectable } from "inversify";
import { TouchInterface, LsInterface } from "../../../types/service";
import { COMMANDIDENTIFIER } from "../../../constants/identifiers";

@injectable()
export class TouchCommandService implements TouchInterface {
  @inject(COMMANDIDENTIFIER.LS) private readonly ls: LsInterface;

  execute() {
    console.log("touch");
    this.ls.execute();
  }
}
