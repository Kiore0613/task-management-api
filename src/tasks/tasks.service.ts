import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }
  //   return found;
  // }
  // getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => task.title.includes(search));
  //   }
  //   return tasks;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   //destructuring
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuidv4(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  // updateTask(id: string, updateTaskDto: UpdateTaskDto): Task {
  //   const { title, description, status } = updateTaskDto;
  //   const task = this.getTaskById(id);
  //   task.title = title;
  //   task.description = description;
  //   task.status = status;
  //   return task;
  // }
  // DeleteTask(id: string): void {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }
}
