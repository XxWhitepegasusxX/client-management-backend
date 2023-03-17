import { IClientRepository } from "@modules/clients/repositories/IClientRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListClientUseCase{
    constructor(@inject("ClientRepository") private clientRepository: IClientRepository){}

    async execute(){
        try{
            const clientList = await this.clientRepository.listClients()

            return clientList
        
        }catch(e){
            throw new AppError(e);
        }

    }
}

export { ListClientUseCase }