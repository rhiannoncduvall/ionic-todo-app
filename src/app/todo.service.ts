import { Injectable } from '@angular/core';

export class Todo {
  id: number;
  title = '';
  complete = false;

  constructor(values: Object = {}) {
      Object.assign(this, values)
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lastId: number = 0;
  completedLastId: number = 0;

  todos: Todo[] = [];
  completedTodos: Todo[] = [];

  constructor() { }

    //Simulate POST /todos
    addTodo(todo: Todo): TodoService {
      if (!todo.id) {
        todo.id = ++this.lastId;
      }
  
      this.todos.push(todo);
      return this;
    }

    addCompletedTodo(todo: Todo): TodoService {
      this.deleteTodoById(todo.id)
      todo.id = ++this.completedLastId;
      this.completedTodos.push(todo);
      console.log(this.completedTodos)
      return this;
    }
  
    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): TodoService {
      this.todos = this.todos
        .filter(todo => todo.id !== id);
      return this;
    }

    deleteCompletedTodoById(id: number): TodoService {
      this.completedTodos = this.completedTodos
        .filter(todo => todo.id !== id);
      return this;
    }
  
    // Simulate PUT /todos/:id
    updateTodoById(id: number, values: Object = {}): Todo {
      let todo = this.getTodoById(id);
      if (!todo) {
        return null;
      }
      Object.assign(todo, values);
      return todo;
    }
  
    // Simulate GET /todos
    getAllTodos(): Todo[] {
      return this.todos;
    }
  
    // Simulate GET /todos/:id
    getTodoById(id: number): Todo {
      return this.todos
        .filter(todo => todo.id === id)
        .pop();
    }
  
    // Toggle todo complete
    toggleTodoComplete(todo: Todo) {
      let updatedTodo = this.updateTodoById(todo.id, {
        complete: !todo.complete
      });
      return updatedTodo;
    }
}
