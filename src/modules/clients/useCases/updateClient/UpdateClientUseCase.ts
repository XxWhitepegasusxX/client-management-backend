import { IClientRepository } from "@modules/clients/repositories/IClientRepository";
import { Client } from "@prisma/client";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateClientUseCase{
    constructor(@inject("ClientRepository") private clientRepository: IClientRepository){}

    async execute(id: string, data: any): Promise<Client>{
        
        try{
            const client = await this.clientRepository.updateClient(id, data);
            return client;
        }catch(e){
            throw new AppError(e)
        }

    }

}

export { UpdateClientUseCase }