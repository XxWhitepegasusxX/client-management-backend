import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClientUseCase } from "./CreateClientUseCase";
import { ICreateClientDTO } from "@modules/clients/dtos/ICreateClientDTO";

class CreateClientController{

    async handle(req: Request, res: Response): Promise<Response>{
        
        const data: ICreateClientDTO = req.body;

        const createClientUseCase = container.resolve(CreateClientUseCase)

        await createClientUseCase.execute(data);
        
        return res.status(201).send()
    }

}

export { CreateClientController };