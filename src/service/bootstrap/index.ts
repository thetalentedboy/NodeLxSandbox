import { inject, injectable } from "inversify";
import { bootstrapInterface } from "../interfaces/bootstrap";
import { commandExecutorInterface } from "../interfaces";
import IDENTIFIER from "src/constants/identifiers";

@injectable()
export class Bootstrap implements bootstrapInterface {
	@inject(IDENTIFIER.COMMANDEXECUTOR) private commandExecutor: commandExecutorInterface

	start(): void {
				
	}
}