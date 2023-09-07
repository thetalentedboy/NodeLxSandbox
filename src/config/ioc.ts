import "reflect-metadata";
import { Container } from "inversify";
import IDENTIFIER from "../constants/identifiers";
import {
  bootstrapInterface,
  commandExecutorInterface,
  LsInterface,
  TouchInterface,
} from "../service/interfaces";
import {
  Bootstrap,
  commandExecutor,
 LsCommandService,
 TouchCommandService,
} from "../service";



const container = new Container();

container.bind<bootstrapInterface>(IDENTIFIER.BOOTSTRAP).to(Bootstrap)
container.bind<commandExecutorInterface>(IDENTIFIER.COMMANDEXECUTOR).to(commandExecutor)
container.bind<LsInterface>(IDENTIFIER.LS).to(LsCommandService)
container.bind<TouchInterface>(IDENTIFIER.TOUCH).to(TouchCommandService)

export default container;