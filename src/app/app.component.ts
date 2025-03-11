import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports : [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./home.component.scss']
})
export class AppComponent {
  title = 'FrontBase';
  welcome = "Hola holaaaa";
  tasks = ['una','dos','tres'];

}
