import {Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adding new ToDo!';
  todoArray = []

  addTodo(value) {
    this.todoArray.push(value)
    console.log(this.todoArray)
  }

  /*delete item*/
  deleteItem(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }

}
