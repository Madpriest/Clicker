import { Injectable } from '@angular/core';
import { GameDataService } from './game-data.service';
import { Creature } from 'src/app/app.component';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  public creature:Creature;
  
  public gameLvl:number = 0;
  public potat_amount = 0;
 constructor(private _gameDataService: GameDataService){
  this.creature ={hp: 100,
    lvl: 0,
    name: 'Sad Guy',
    rare: false,
    type:1}
 }
public gold:number = 0;
  public new_creature(hp:number, name: string, lvl: number, rare:boolean, type:number):void{
    this.creature.hp= hp;
    this.creature.name= name;
    this.creature.lvl= lvl;
    this.creature.rare = rare;
    this.creature.type = type;
    this.gameLvl +=1;
   }
  
  public killed(){
    this.gold += 10;
  
  }
}
