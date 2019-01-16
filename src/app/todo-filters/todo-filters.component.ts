import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFiltersComponent implements OnInit, OnChanges {
  @Input() filterCondition: string;
  @Output() filterConditionChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes) {
    console.log(changes);
  }

  changeFilter(condition) {
    this.filterConditionChange.emit(condition);
  }
}
