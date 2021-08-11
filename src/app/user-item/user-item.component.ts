import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {

  @Output() userSelect = new EventEmitter<number>();
  @Input() user!: User;
}
