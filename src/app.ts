/* import { ManagerService } from "./services/manager.service";
import express, { request, response } from "express";

const app = express();
app.use(express.json());
const managerService = new ManagerService();

app.get("/managers", async (req, res) => {
  const managers = await managerService.findAll;
  return res.json(managers);
});

app.post("/managers", async (req, res) => {
  const manager = await managerService.create(req.body);
  return res.status(201).json(manager);
});

app.get("/managers/:id", (req, res) => {
  console.log(req.params.id);
  console.log(typeof req.params.id);

  const foundManager = managerService.findOne(Number(req.params.id));

  if (!foundManager) {
    return res.status(404).json({ error: "Manager not found" });
  }

  return res.json(foundManager);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000")); */



import express from "express";
// import { ManagerController } from "./controllers/manager.controller";
// import { ExemploController } from "./controllers/exemplo.controller";
import { ManagerController, ExemploController } from "./controllers";

const app = express();
app.use(express.json());

const managerController = new ManagerController();

app.get("/managers", managerController.findAll);
app.post("/managers", managerController.create);
app.get("/managers/:managerId", managerController.findOne);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

