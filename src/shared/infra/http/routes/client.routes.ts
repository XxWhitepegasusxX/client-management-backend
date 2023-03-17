import { CreateClientController } from "@modules/clients/useCases/createClient/CreateClientController";
import { Router } from "express";

const clientRoutes = Router()

const createClientController = new CreateClientController()

clientRoutes.post("/", createClientController.handle)

export { clientRoutes }