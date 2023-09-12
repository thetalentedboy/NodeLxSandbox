import { injectable } from "inversify";
import { LsInterface } from "../../../types/service";

@injectable()
export class LsCommandService implements LsInterface {
	execute() {
		console.log('ls')		
	}
}