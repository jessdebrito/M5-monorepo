import { Manager } from "@prisma/client";

/* export type Manager = {
  id: number;
  name: string;
  email: string;

}; */

export type ManagerCreate = Omit<Manager, "id" | "createdAt">;

export { Manager };
