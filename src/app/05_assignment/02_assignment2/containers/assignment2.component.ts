import { Component, Input } from '@angular/core';
import { Todo } from '../../assignment.component';


@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  @Input()
  data: Todo

  selected : Todo

  onSelect(todo:Todo){
    this.selected = todo;
  }
}
