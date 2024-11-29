import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {

todoTitle: string = '';

@Output() todo = new EventEmitter<string>();

onAdd(): void {
  this.todo.emit(this.todoTitle)
  console.log(this.todoTitle)
}

}
