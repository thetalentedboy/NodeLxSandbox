import container from "./config/ioc";
import IDENTIFIER from "./constants/identifiers";
import { touchInterface } from "./service/interfaces";


const service = container.get<touchInterface>(IDENTIFIER.TOUCH)


service.execute()