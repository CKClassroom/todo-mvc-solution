import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  title = 'todomvc';
  newTodoPlaceholder = 'What needs to be done?';

  filterCondition = 'all';
  todos: Todo[] = [
    {
      id: 1,
      item: 'todo 1',
      isCompleted: false,
      isEditing: false
    },
    {
      id: 2,
      item: 'todo 2',
      isCompleted: true,
      isEditing: false
    },
    {
      id: 3,
      item: 'todo 3',
      isCompleted: false,
      isEditing: false
    }
  ];
  maxId = 3;
  toggleStatus;

  get uncompletedCount() {
    return this.todos.filter(x => x.isCompleted === false).length;
  }

  // 移除已完成項目
  clearCompleted() {
    this.todos = this.todos.filter(x => !x.isCompleted);
  }

  addTodo(newTodo) {
    this.todos.push({
      id: ++this.maxId,
      item: newTodo,
      isCompleted: false,
      isEditing: false
    });
  }

  toggleComplete(todo: Todo) {
    this.todos = this.todos.map(_todo => {
      if (_todo.id === todo.id) {
        _todo.isCompleted = !_todo.isCompleted;
      }
      return _todo;
    });
    // todo.isCompleted = !todo.isCompleted;
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
