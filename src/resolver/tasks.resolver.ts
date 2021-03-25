import { Inject, ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { AddTaskInput } from '../dto/task.dto';

@Resolver(() => Task)
export class TasksResolver {
  constructor(@Inject(TaskService) private taskService: TaskService) {}
  @Query(() => [Task])
  async tasks() {
    return await this.taskService.findAll();
  }

  @Query(() => Task, { nullable: true })
  async task(@Args('id', ParseIntPipe) id: number) {
    return await this.taskService.findOne(id);
  }

  @Mutation(() => Task)
  async saveTask(@Args('task') task: AddTaskInput) {
    return await this.taskService.save(task);
  }
}
