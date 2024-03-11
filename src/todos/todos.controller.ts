import {
  Controller,
  Get,
  Put,
  Delete,
  Post,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { Todo } from 'src/interfaces/todo.interface';

@Controller('todos')
export class TodosController {
  constructor(private todoServices: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todoServices.findOne(id);
  }

  @Get()
  findAll(): any[] {
    return this.todoServices.findAll();
  }

  @Post()
  createTodo(@Body() newtodo: CreateTodoDto) {
    return this.todoServices.create(newtodo);
  }

  @Patch('id')
  update(@Param('id') id: number, @Body() newer: Todo) {
    return this.todoServices.update(id, newer);
  }

  @Delete('id')
  delete(@Param('id') id: number) {}
}
