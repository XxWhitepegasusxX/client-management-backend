import { Client } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";
import { IClientRepository } from "../IClientRepository";
import { ICreateClientDTO } from "@modules/clients/dtos/ICreateClientDTO";

class ClientRepositoryInMemory implements IClientRepository{
    
    clients: Client[] = [];
    
    async create({name, birthday, address, cell, cpf, email, observation}: ICreateClientDTO): Promise<void> {
        const client: Client = {
            id: uuidV4(),
            name,
            birthday, 
            address, 
            cell, 
            cpf, 
            email,
            observation
        };
    
        await this.clients.push(client);
    }

    async updateClient(id: string, data: any): Promise<Client> {
        const client: Client = this.clients.find(client => client.id === id);

        if (!client) {
            throw new Error(`Client with id ${id} not found`);
        }

        Object.assign(client, data);

        return client;
    }

    async listClients(): Promise<Client[]> {
        return this.clients;
    }

    async findById(id: unknown): Promise<Client> {
        const client = await this.clients.find(client => client.id === id);
        
        if (!client) {
            throw new Error(`Client with id ${id} not found`);
        }
        return client;
    }

    async findByCpf(cpf: string): Promise<Client> {
        const client = await this.clients.find(client => client.cpf === cpf);

        if (!client) {
            throw new Error(`Client with cpf ${cpf} not found`);
        }
        return client;
    }

    async deleteClient(id: string): Promise<void> {
        const client = await this.clients.map((client, index) => client.id === id ? this.clients.splice(index, 1) : console.log("Client not found"))
    }
    
}

export { ClientRepositoryInMemory }