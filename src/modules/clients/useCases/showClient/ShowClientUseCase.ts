import { inject, injectable } from "tsyringe";

import { Client } from "@prisma/client";
import { IClientRepository } from "@modules/clients/repositories/IClientRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class ShowClientUseCase{
    constructor(@inject("ClientRepository") private clientRepository: IClientRepository){}

    async execute(id: string): Promise<Client> {
        try{
            const client = await this.clientRepository.findById(id);
            
            return client;

        }catch(e){
            throw new AppError(e)
        }
    }

}

export { ShowClientUseCase }