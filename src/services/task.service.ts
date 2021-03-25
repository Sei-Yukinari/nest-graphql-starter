import { Injectable } from '@nestjs/common';
import { Task } from '../models/task.model';
import { AddTaskInput } from '../dto/task.dto';

export const TaskMock: Array<Task> = [
  {
    id: 1,
    title: 'aaa',
  },
  {
    id: 2,
    title: 'bbb',
  },
];

//providerの宣言
@Injectable()
export class TaskService {
  async findAll(): Promise<Task[]> {
    return TaskMock;
  }

  async findOne(id: number): Promise<Task> {
    return TaskMock.find((t) => t.id === id);
  }

  async save(task: AddTaskInput): Promise<Task> {
    return task;
  }
}
