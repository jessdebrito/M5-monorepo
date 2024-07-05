import { Router } from "express";
import { AccountController } from "./controller";
import { validateBody } from "../@shared/validators";
import { accountCreateSchema, accountUpdateSchema } from "./schemas";
import { isAuthenticated } from "../session";
import { isAccountOwner } from "./middlewares";

export const accountRouter = Router();
const accountController = new AccountController();

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
