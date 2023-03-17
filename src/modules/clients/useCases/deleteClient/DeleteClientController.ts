import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

class DeleteClientController{

    async handle(req: Request, res: Response): Promise<Response>{
        
        const { id } = req.params;
        const deleteClientUseCase = container.resolve(DeleteClientUseCase)

        try{
            await deleteClientUseCase.execute(id)
        }catch(e){
            throw new AppError(e)
        }
        return res.json("Client deleted successfully");
    }
}

export { DeleteClientController }