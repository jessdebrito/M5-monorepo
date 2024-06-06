import { prisma } from "../../prisma/prisma.client";
import { Project, ProjectCreate } from "../interfaces";

export class ProjectService {
  public create = async (payload: ProjectCreate): Promise<Project> => {
    // const newProject = await prisma.project.create({ data: payload });
    // return newProject;

    return await prisma.project.create({ data: payload });
  };

  public findAll = async (): Promise<Project[]> => {
    // SELECT * FROM "Project";
    return await prisma.project.findMany();
  };

  public findOne = async (projectId: number): Promise<Project | null> => {
    return await prisma.project.findFirst({ where: { id: projectId } });
  };
}
