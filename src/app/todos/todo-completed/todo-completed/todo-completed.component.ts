import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-todo-completed',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-completed.component.html',
  styleUrl: './todo-completed.component.scss'
})
export class TodoCompletedComponent {


  @Input() completed!: boolean;



  @Output() todo = new EventEmitter<boolean>();

  onCheck(): void {
    this.completed? this.completed = false : this.completed = true;
    this.todo.emit(this.completed)
    console.log(this.completed)
  }

}
