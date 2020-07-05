import { Component } from '@angular/core';
export interface NPC{
  hp:number,
  name:string,
}
export interface Creature{
  hp:number,
  name:string,
  lvl:number,
  rare:boolean,
  type: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clicker';
}
