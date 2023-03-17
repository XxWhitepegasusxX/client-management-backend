import { container } from "tsyringe";

import { ClientRepository } from '@modules/clients/infra/prismaORM/repositories/ClientRepository';
import { IClientRepository } from '@modules/clients/repositories/IClientRepository';

container.registerSingleton<IClientRepository>(
    "ClientRepository",
    ClientRepository
)