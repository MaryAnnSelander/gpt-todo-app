import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTodo = '';
  todos: { todo: string; completed: boolean }[] = [];

  addTodo(todo: string) {
    this.todos.push({ todo: todo, completed: false });
  }

  toggleCompleted(todo: { todo: string; completed: boolean }) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: { todo: string; completed: boolean }) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
}
