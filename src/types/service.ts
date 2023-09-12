export interface TouchInterface {
	execute(): void
}


export interface LsInterface {
	execute(): void
}


export type CommandUnionType = TouchInterface | LsInterface