import { Client } from "@prisma/client";
import { ICreateClientDTO } from "../dtos/ICreateClientDTO";

interface IClientRepository{

    create(data: ICreateClientDTO): Promise<void>;
    updateClient(id: string, data: any): Promise<Client>; // AQUI UTILIZAMOS ANY POIS ASSIM, PODEMOS ATUALIZAR QUALQUER INFORMAÇÃO COM UMA UNICA INTERFACE //
    listClients(): Promise<Client[]>;
    findById(id: string): Promise<Client>;
    findByCpf(cpf: string): Promise<Client>;
    deleteClient(id: string): Promise<void>;

}

export { IClientRepository }