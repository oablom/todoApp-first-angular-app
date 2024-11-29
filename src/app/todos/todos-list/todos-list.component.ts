import { Component, ChangeDetectorRef } from '@angular/core';
import { TodoDataService } from '../../services/todo-data.service';

import { CommonModule } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoCompletedComponent } from '../todo-completed/todo-completed/todo-completed.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, AddTodoComponent, TodoCompletedComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {

  todos: { title: string; id: number; completed: boolean; }[] = [];

  constructor(private todoDataService: TodoDataService, private cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.todos = this.todoDataService.getAllTodos();
  }

  addNewTodo(title: string) {
    this.todoDataService.addTodo(title);
    this.todos = this.todoDataService.getAllTodos();
  }

  removeTodo(id: number) {
    this.todoDataService.removeTodoById(id);
    this.todos = this.todoDataService.getAllTodos();
  }

  todoCompletedCheck(id: number) {
    this.todoDataService.todoCompleted(id);
    this.todos = [...this.todoDataService.getAllTodos()]; 
    this.cd.detectChanges();
  }
  
  
  

}
