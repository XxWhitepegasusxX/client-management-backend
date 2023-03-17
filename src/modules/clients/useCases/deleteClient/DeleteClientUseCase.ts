import { IClientRepository } from "@modules/clients/repositories/IClientRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteClientUseCase{
    constructor(@inject("ClientRepository") private clientRepository: IClientRepository){}

    async execute(id){
        try{
            await this.clientRepository.deleteClient(id);
        }catch(e){
            throw new AppError(e);
        }
    }
}

export { DeleteClientUseCase }