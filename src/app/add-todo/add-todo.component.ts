import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  count:number = 0;

  onSubmit(){
    this.count+=1;
    const todo = {
      id: this.count,
      title: this.title,
      desc: this.desc,
      active: true

    }
    this.todoAdd.emit(todo);
  }
}
