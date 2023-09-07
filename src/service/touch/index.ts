import { inject, injectable } from "inversify";
import { touchInterface, lsInterface } from "../../interfaces";
import IDENTIFIER from "../../constants/identifiers";

@injectable()
export class touch implements touchInterface {
	@inject(IDENTIFIER.LS) private readonly ls: lsInterface

	execute() {
		console.log('touch')				
		this.ls.execute()
	}
}