import { inject, injectable } from "inversify";
import { TouchInterface, LsInterface } from "../interfaces";
import IDENTIFIER from "../../constants/identifiers";

@injectable()
export class TouchCommandService implements TouchInterface {
	@inject(IDENTIFIER.LS) private readonly ls: LsInterface

	execute() {
		console.log('touch')				
		this.ls.execute()
	}
}