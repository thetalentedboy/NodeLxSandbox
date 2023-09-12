import container from "./config/ioc";
import { IDENTIFIER } from "./constants/identifiers";
import { BootstrapInterface } from "./types";

const bootstrap = container.get<BootstrapInterface>(IDENTIFIER.BOOTSTRAP);
bootstrap.start();
