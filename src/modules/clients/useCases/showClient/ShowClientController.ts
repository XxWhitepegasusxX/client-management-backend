import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowClientUseCase } from "./showClientUseCase";

class ShowClientController{

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const showClientUseCase = container.resolve(ShowClientUseCase)
        
        const client = await showClientUseCase.execute(id);
        console.log(client);
        return res.json(client)
    }
}

export { ShowClientController }