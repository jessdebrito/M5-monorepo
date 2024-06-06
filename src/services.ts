import { prisma } from "../prisma/prisma.client";
import { Manager, ManagerCreate } from "./interfaces";

export class ManagerService {
  public create = async (payload: ManagerCreate) => {
    const newManager = await prisma.manager.create({ data: payload });

    return newManager;
  };

  public findAll = async () => {
    //SELECT * FROM "Manager"
    return await prisma.manager.findMany();
  };

 /*  public findOne = (managerId: number) => {
    return this.managerDatabase.find((manager) => manager.id === managerId);
  }; */
}
