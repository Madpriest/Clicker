import { Injectable } from '@angular/core';
import { Creature } from 'src/app/app.component';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  public creature: Creature;
  public isDay = true;
  public gameLvl = 0;
 constructor(){
  this.creature = {hp: 100,
    lvl: 0,
    name: 'Sad Guy',
    title: 'Very Sad',
    rare: false,
    type: 1};
 }
public gold = 999999;
  public new_creature(hp: number, name: string, title: string, lvl: number, rare: boolean, type: number): void{
    this.creature.hp = hp;
    this.creature.name = name;
    this.creature.title = title;
    this.creature.lvl = lvl;
    this.creature.rare = rare;
    this.creature.type = type;
   }
  public killed(){
    this.gold += Math.floor(1.1 * this.gameLvl);
    this.gameLvl += 1;
  }
  public dayNight(){
    setInterval(() => {
      this.isDay = !this.isDay;
    }, 300000);
  }
}
