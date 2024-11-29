import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
private todos: {title: string; id: number; completed: boolean}[] = [ 
  {title: 'Install Angular CLI', id: 1, completed: false},
  {title: 'Style app', id: 2, completed: false},
{title: 'Finish service functionality', id: 3, completed: true},]
  

  getAllTodos() {
    return this.todos;
  }

addTodo(todoTitle: string): void {
  const newTodo = {
    title: todoTitle,
    id: this.todos.length +1 ,
    completed: false}

    this.todos.push(newTodo);
  }

  removeTodoById(id:number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  todoCompleted(id: number) {

    let updatedTodos = [...this.todos];
    updatedTodos = this.todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    if (updatedTodos) {
      this.todos = updatedTodos;
    }

 
  }


  constructor() { }
}
