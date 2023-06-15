import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onCheckboxclick(todo:Todo){
    console.log(todo);
    this.todoCheckbox.emit(todo);
    console.log(todo);
  }
  onClick(todo: Todo ){
    this.todoDelete.emit(todo);
  }
}
