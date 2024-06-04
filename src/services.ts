import { Manager, ManagerCreate } from "./interfaces";

export class ManagerService {
  // GENERIC
  // private managerDatabase: Array<Manager> = [];
  private managerDatabase: Manager[] = [
    { id: 3, name: "Patricia", email: "contato@patricia.com" },
    { id: 1, name: "Bruna", email: "contato@bruna.com" },
  ];

  /* 
    1. --> Tamanho do array +1
    2. --> Pegar o id do último elemento e somar 1
    O último elemento de um array 99% é o tamanho dele -1
    3. --> Começa a contagem de trás para frente
    
 */
  private generateNextId = () => {
    // 1.
    // const dbLen = this.managerDatabase.length
    //return dbLen +1;

    // 2.
    // const dbLen = this.managerDatabase.length;
    // const lastManager = this.managerDatabase[dbLen - 1];

    // 3.
    //começa a contagem de trás para a frente
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
