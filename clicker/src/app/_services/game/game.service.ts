import { Injectable } from '@angular/core';
import { Creature } from 'src/app/app.component';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  public creature:Creature;
  public isDay = true;
  public gameLvl:number = 0;
  public potat_amount = 0;
 constructor(){
  this.creature ={hp: 100,
    lvl: 0,
    name: 'Sad Guy',
    title: 'Very Sad',
    rare: false,
    type:1}
 }
public gold:number = 99999;
  public new_creature(hp:number, name: string, title:string, lvl: number, rare:boolean, type:number):void{
    this.creature.hp = hp;
    this.creature.name = name;
    this.creature.title = title;
    this.creature.lvl = lvl;
    this.creature.rare = rare;
    this.creature.type = type;
    this.gameLvl +=1;
   }
  
  public killed(){
    this.gold += Math.floor(10*1.1*this.gameLvl);
  
  }
  public dayNight(){
    setInterval(() => {
      this.isDay = !this.isDay
      
    }, 300000);
    
  }
}
