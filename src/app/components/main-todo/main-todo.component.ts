import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './main-todo.component.html',
  styleUrl: './main-todo.component.css'
})
export class MainTodoComponent {
  todos : {text : string, completed: boolean}[] = []
  newTask = ''
  get completedTodos(){
    return this.todos.filter(todo => todo.completed);

  }
  uncompletedTodos() {
    return this.todos.filter(todo => !todo.completed);
  }

  todoCount = this.todos.length
  addTodo(){
    if(this.newTask.trim() !== ''){
      this.todos.push({text: this.newTask, completed:false})
    }
  
  this.todoCount = this.todos.length 
    this.newTask = ''
  }
  todoPop(){
    this.deleteTodo(this.todoCount)
  }
  
  deleteTodo(index:number){
    this.todos.splice(index, 1)
  }
deleteCompleteTodo(index: number){
  this.completedTodos.splice(index, 1)
}
 reduceNUm(){
  this.todoCount = -1
 }

  toggleComplete(index: number){
    this.todos[index].completed = !this.todos[index].completed;
  }

}
