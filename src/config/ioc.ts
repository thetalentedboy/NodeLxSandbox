import "reflect-metadata";
import { Container } from "inversify";
import { IDENTIFIER, COMMANDIDENTIFIER } from "../constants/identifiers";
import {
  BootstrapInterface,
  CommandExecutorInterface,
  CommandServiceInterface
} from "../types";
import {
  Bootstrap,
  commandExecutor,
  commandService
} from "../service";

const container = new Container();

container.bind<BootstrapInterface>(IDENTIFIER.BOOTSTRAP).to(Bootstrap)
container.bind<CommandExecutorInterface>(IDENTIFIER.COMMANDEXECUTOR).to(commandExecutor)
container.bind<CommandServiceInterface.LsInterface>(COMMANDIDENTIFIER.LS).to(commandService.LsCommandService)
container.bind<CommandServiceInterface.TouchInterface>(COMMANDIDENTIFIER.TOUCH).to(commandService.TouchCommandService)

export default container;