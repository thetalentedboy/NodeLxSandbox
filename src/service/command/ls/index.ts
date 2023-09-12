import { injectable } from "inversify";
import { LsInterface } from "../../../types/service";
import { ParsedArgs } from "minimist";

@injectable()
export class LsCommandService implements LsInterface {
	execute(params: ParsedArgs) {
		console.log(process.cwd())		
	}
}