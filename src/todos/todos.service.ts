import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { Todo } from 'src/interfaces/todo.interface';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'pain',
      description: 'Mon contenu',
      done: false,
    },
    {
      id: 2,
      title: 'beurre',
      description: 'Mon contenu',
      done: true,
    },
    {
      id: 3,
      title: 'CACAO',
      description: 'Mon contenu vide',
      done: false,
    },
  ];
  findOne(id: number) {
    return this.todos.find((todo) => todo.id == id);
  }

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: CreateTodoDto) {
    this.todos = [...this.todos, todo as Todo];
  }

  update(id: number, todo: Todo) {
    const OneTodo = this.todos.find((t) => t.id == id);
    if (OneTodo.title) {
      OneTodo.title = todo.title;
    }
    if (OneTodo.description) {
      OneTodo.description = todo.description;
    }
    if (OneTodo.hasOwnProperty('done')) {
      OneTodo.done = todo.done;
    }
    if (!OneTodo) {
      return new NotFoundException('Id non trouvé');
    }
    const updateTodo = this.todos.map((t) => (t.id != id ? t : OneTodo));
    this.todos = [...updateTodo];
    return { updateTodos: 1, todo: OneTodo };
  }
  delete(id: number) {}
}
