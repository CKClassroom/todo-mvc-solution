import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todomvc';
  newTodoPlaceholder = 'What needs to be done?';

  newTodo = '';
  todos: Todo[] = [];
  maxId = 0;
  toggleStatus;

  get uncompletedCount() {
    return this.todos.filter(x => x.isCompleted === false).length;
  }

  // 移除已完成項目
  clearCompleted() {
    this.todos = this.todos.filter(x => !x.isCompleted);
  }

  addTodo() {
    this.todos.push({
      id: ++this.maxId,
      item: this.newTodo,
      isCompleted: false,
      isEditing: false
    });
    // console.log(this.todos);
    this.newTodo = '';
  }

  toggleComplete(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  // 移除項目方法1
  removeTodo(idx) {
    this.todos.splice(idx, 1);
  }
  // #region 移除項目方法s
  // 移除項目方法2
  // removeTodo(todo) {
  //   this.todos.splice(this.todos.findIndex(x => x.id === todo.id), 1);
  // }

  // 移除項目方法3
  // removeTodo(todo) {
  //   this.todos = this.todos.filter(x => x.id !== todo.id);
  // }
  // #endregion

  // Mark all as complete
  toggleAllComplete(event) {
    // console.log(this.toggleStatus);
    console.dir(event.target.checked);
    this.todos.forEach(x => (x.isCompleted = true));

    // this.todos = this.todos.map(todo => ({ ...todo, isCompleted: true }));
  }
}

export interface Todo {
  id: number;
  item: string;
  isCompleted: boolean;
  isEditing: boolean;
}
