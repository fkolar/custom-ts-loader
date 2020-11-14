import {Component} from '@angular/core';
import {UserEntity} from './user.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-ts-loader';


  constructor() {
    const user = new UserEntity('John', 10);
  }
}
