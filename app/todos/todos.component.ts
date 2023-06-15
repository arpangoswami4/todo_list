import { Component } from '@angular/core';
import { Todo } from "../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  deleteTodo(todo:Todo){
    const indexTodo = this.todos.indexOf(todo);
    this.todos.splice(indexTodo, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo)
  {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
    const indexTodo = this.todos.indexOf(todo);
    this.todos[indexTodo].active = !this.todos[indexTodo].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }


  localItem: string | null;
  todos:Todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null)
    {
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

}
