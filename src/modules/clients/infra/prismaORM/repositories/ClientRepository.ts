import { PrismaClient, Client } from "@prisma/client";

import { ICreateClientDTO } from "@modules/clients/dtos/ICreateClientDTO";
import { IClientRepository } from "@modules/clients/repositories/IClientRepository";
import { AppError } from "@shared/errors/AppError";
import { prisma } from "@shared/services/prismaClient";

class ClientRepository implements IClientRepository{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = prisma;
    }

    async create(data: ICreateClientDTO): Promise<void> { // FUNÇÃO PARA CRIAR O CLIENTE NO BANCO DE DADOS
        try{
            await this.prisma.client.create({
                data,
            });
        }catch(e){
            throw new AppError(e)
        }
    }

    async updateClient(id: string, data: any): Promise<Client> { // FUNCÃO PARA ATUALIZAR O CLIENTE
        try{
            const client = await this.prisma.client.update({
                where: { id },
                data,
            });

            return client;
        }catch(e){
            throw new AppError(e)
        }
    }

    async listClients(): Promise<Client[]> { // LISTAR CLIENTES
        try{

            const clients = await this.prisma.client.findMany();
            return clients;

        }catch(e){
            throw new AppError(e)
        }
    }

    async findById(id: string): Promise<Client> { // ENCONTRAR UM UNÍCO CLIENTE PELO ID
        try{

            const client = await this.prisma.client.findUnique({
                where: { id },
            });
            return client;

        }catch(e){
            throw new AppError(e)
        }
    }

    async findByCpf(cpf: string): Promise<Client> { // ENCONTRAR UM UNÍCO CLIENTE PELO CPF
        try{

            const client = await this.prisma.client.findUnique({
                where: { cpf },
            });
            return client;

        }catch(e){
            throw new AppError(e)
        }
    }

    async deleteClient(id: string): Promise<void> { // DELETAR UM CLIENTE DO BANCO DE DADOS
        try{
            await this.prisma.client.delete({
                where: { id },
            })
        }catch(e){
            throw new AppError(e)
        }
    }


}

export { ClientRepository }