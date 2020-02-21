import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {

  newTodo: Todo = new Todo();

  constructor(private _todoServe: TodoService) {

  }


  addTodo() {
    if (!this.newTodo.title) {
      return;
    }

    this._todoServe.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this._todoServe.toggleTodoComplete(todo);
    this._todoServe.addCompletedTodo(todo);
  }

  removeTodo(todo) {
    this._todoServe.deleteTodoById(todo.id);
  }

  removeCompletedTodo(todo) {
    this._todoServe.deleteCompletedTodoById(todo.id)
  }

  get todos() {
    return this._todoServe.getAllTodos();
  }

}
