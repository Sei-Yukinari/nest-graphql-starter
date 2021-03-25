import { Module } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { TasksResolver } from '../resolver/tasks.resolver';

@Module({
  imports: [],
  providers: [TaskService, TasksResolver],
  exports: [TaskService],
})
export class TaskModule {}
