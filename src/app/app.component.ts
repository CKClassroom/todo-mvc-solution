import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todomvc';
  newTodoPlaceholder = 'What needs to be done?';

  addTodo(newTodo) {
    console.log(newTodo.value);
    newTodo.value = '';
  }
}
