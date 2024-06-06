import { prisma } from "../../prisma/prisma.client";
import { Manager, ManagerCreate } from "../interfaces";
 

  export class ManagerService {
    public create = async (payload: ManagerCreate) => {
       //const newManager = await prisma.manager.create({ data: payload });
    // return newManager;
    // mesmo retorno
      const newManager = await prisma.manager.create({ data: payload });
  
      return newManager;
    };
  
  public findAll = async () => {
    //SELECT * FROM "Manager"
    return await prisma.manager.findMany();
  };

  public findOne = async (managerId: number) => {
    // SELECT * FROM "Manager" WHERE id = 1;
    const foundManager = await prisma.manager.findUnique({
      where: { id: managerId },
    });

    return foundManager;
  };
}