import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainTodoComponent } from '../components/main-todo/main-todo.component';

@Component({
  selector: 'app-home',
  imports: [MainTodoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
