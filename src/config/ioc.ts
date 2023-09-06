import "reflect-metadata";
import { Container } from "inversify";
import {
  lsInterface,
  touchInterface
} from "../interfaces";
import {
 ls,
 touch 
} from "../commands";

import IDENTIFIER from "../constants/identifiers";

let container = new Container();

container.bind<lsInterface>(IDENTIFIER.LS).to(ls)
container.bind<touchInterface>(IDENTIFIER.TOUCH).to(touch)

export default container;

