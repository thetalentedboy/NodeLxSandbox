import { injectable } from "inversify";
import { lsInterface } from "../../interfaces/ls";

@injectable()
export class ls implements lsInterface {
	execute() {
		console.log('ls')		
	}
}