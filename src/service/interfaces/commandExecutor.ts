export interface commandExecutorInterface {
	input(commandString: string): void
	execute(command: string, queryParams: string[]): void
}