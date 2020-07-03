import { Injectable } from '@angular/core';
import { GameDataService } from './game-data.service';
import { Creature } from 'src/app/app.component';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  public creature:Creature;
  
  public gameLvl:number = 1;
  public potat_amount = 0;
 constructor(private _gameDataService: GameDataService){
  this.creature ={hp: 1,
    lvl: 0,
    name: 'sad',
    rare: false}
 }
public gold:number = 0;
  public new_creature(hp:number, name: string, lvl: number, rare:boolean):void{
    this.creature.hp= hp;
    this.creature.name= name;
    this.creature.lvl= lvl;
    this.creature.rare = rare;
    this.gameLvl +=1;
   }
  
  public killed(){
    this.gold += 10;
  
  }
}
