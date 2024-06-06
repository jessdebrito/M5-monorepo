import { prisma } from "../../prisma/prisma.client";
import { Project, ProjectCreate } from "../interfaces";
 

  export class ProjectService {
    public create = async (payload: ProjectCreate) => {
       //const newProject = await prisma.project.create({ data: payload });
    // return newProject;
    // mesmo retorno
      const newProject = await prisma.project.create({ data: payload });
  
      return newProject;
    };
  
  public findAll = async () => {
    //SELECT * FROM "Project"
    return await prisma.project.findMany();
  };

  public findOne = async (projectId: number) => {
    // SELECT * FROM "Project" WHERE id = 1;
    const foundProject = await prisma.project.findUnique({
      where: { id: projectId },
    });

    return foundProject;
  };
}