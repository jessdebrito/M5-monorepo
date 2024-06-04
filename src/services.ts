import { Manager, ManagerCreate } from "./interfaces";

export class ManagerService {

  private managerDatabase: Manager[] = [
    { id: 3, name: "Patricia", email: "contato@patricia.com" },
    { id: 1, name: "Bruna", email: "contato@bruna.com" },
  ];

  private generateNextId = () => {

    
    const lastManager = this.managerDatabase.sort((a, b) => a.id - b.id).at(-1);

    return lastManager ? lastManager.id + 1 : 1 ;
  };

  public create = (payload: ManagerCreate) => {
    const newManager = {
      id: this.generateNextId(),
      ...payload,
    };
    this.managerDatabase.push(newManager);

    return newManager;
  };

  public findAll = () => {
    return this.managerDatabase;
  };

  public findOne = (managerId: number) => {
    return this.managerDatabase.find((manager) => manager.id === managerId)
  }

}
