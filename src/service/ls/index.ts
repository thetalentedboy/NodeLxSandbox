import { injectable } from "inversify";
import { LsInterface } from "../interfaces";

@injectable()
export class LsCommandService implements LsInterface {
	execute() {
		console.log('ls')		
	}
}