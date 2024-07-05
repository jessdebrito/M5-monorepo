import { Router } from "express";
import { AccountController } from "./controller";
import { validateBody } from "../@shared/validators";
import { accountCreateSchema, accountUpdateSchema } from "./schemas";
import { isAuthenticated } from "../session";
import { isAccountOwner } from "./middlewares";
import { AccountService } from "./service";
import { InMemoryAccountService } from "./InMemory.service";

export const accountRouter = Router();

// const accountService = new AccountService();
// const accountController = new AccountController(accountService);

const inMemoryAccountService = new InMemoryAccountService();
const accountController = new AccountController(inMemoryAccountService);

accountRouter.post(
  "",
  validateBody(accountCreateSchema),
  accountController.create
);

accountRouter.get("", accountController.findAll);

/*
  1. ACCESS CONTROL LAYER 1 (isAuthenticated)
    1.1 - ACCESS CONTROL LAYER 2 (isAccountOwner) - Se o token é do dono da conta
*/
accountRouter.patch(
  "/:id",
  isAuthenticated,
  isAccountOwner,
  validateBody(accountUpdateSchema),
  accountController.partialUpdate
);
