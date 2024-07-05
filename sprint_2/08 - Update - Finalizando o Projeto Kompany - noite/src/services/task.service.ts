import { Task, TaskCreate } from "../interfaces";
import { prisma } from "../../prisma/prisma.client";
import { ApiError } from "../errors";
import { ProjectService } from "./project.service";

export class TaskService {
  private projectService = new ProjectService();

  public create = async (payload: TaskCreate) => {
    const isDevInProject = await this.projectService.isDevInProject(
      payload.projectId,
      payload.devId
    );

    if (!isDevInProject) {
      throw new ApiError(
        "Dev must be in project to be assigned to a task",
        422
      );
    }

    // Se sim, adicionar task ao dev
    const newTask = await prisma.task.create({ data: payload });

    return newTask;
  };

  public findAll = async () => {
    return await prisma.task.findMany();
  };

  public findOne = async (taskId: number) => {
    const foundTask = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!foundTask) {
      throw new ApiError("Task not found", 404);
    }

    return foundTask;
  };
}
