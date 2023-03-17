import { IClientRepository } from "@modules/clients/repositories/IClientRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest{
    name: string;
    birthday: string;
    cpf: string;
    cell: string;
    email: string;
    address: string;
    observation?: string;
}

@injectable()
class CreateClientUseCase{
    constructor(@inject("ClientRepository") private clientRepository: IClientRepository){}
    async execute(data: IRequest): Promise<void>{
        const clientAlreadyExists = await this.clientRepository.findByCpf(data.cpf);

        if(clientAlreadyExists){
            throw new AppError("CPF já cadastrado");
        }

        try{
            await this.clientRepository.create(data);
        }catch(e){
            throw new AppError(e);
        }
    }
}

export { CreateClientUseCase }