import { CreateClientController } from "@modules/clients/useCases/createClient/CreateClientController";
import { DeleteClientController } from "@modules/clients/useCases/deleteClient/DeleteClientController";
import { ListClientController } from "@modules/clients/useCases/listClients/ListClientController";
import { ShowClientController } from "@modules/clients/useCases/showClient/ShowClientController";
import { UpdateClientController } from "@modules/clients/useCases/updateClient/UpdateClientController";
import { Router } from "express";

const clientRoutes = Router()

const createClientController = new CreateClientController()
const deleteClientController = new DeleteClientController()
const listClientController = new ListClientController()
const showClientController = new ShowClientController()
const updateClientController = new UpdateClientController()

clientRoutes.get("/", listClientController.handle)
clientRoutes.get("/:id", showClientController.handle)
clientRoutes.post("/", createClientController.handle)
clientRoutes.put("/:id", updateClientController.handle)
clientRoutes.delete("/:id", deleteClientController.handle)

export { clientRoutes }