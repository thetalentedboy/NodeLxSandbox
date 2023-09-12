export interface CommandExecutorInterface {
	parseParams(commandString: string): string[]
	execute(command: string): void
}