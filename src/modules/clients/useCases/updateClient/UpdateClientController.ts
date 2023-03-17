import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

class UpdateClientController{
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const data = req.body;
        const updateClientUseCase = container.resolve(UpdateClientUseCase)

        const client = await updateClientUseCase.execute(id, data);

        return res.json(client);
        
    }
}

export { UpdateClientController }