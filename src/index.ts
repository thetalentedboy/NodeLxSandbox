import container from "./config/ioc";
import IDENTIFIER from "./constants/identifiers";
import { touchInterface } from "./interfaces";


const service = container.get<touchInterface>(IDENTIFIER.TOUCH)


service.execute()