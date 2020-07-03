import { Injectable, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game/game.service'

@Injectable({
  providedIn: 'root'
})
export class UpgradesService {
public some(){
  this._gameService.potat_amount = this._gameService.potat_amount + 1;
}
private interval;
  constructor(private _gameService: GameService) { }
  public first_upgrade_amount= 0;
  public first_upgrade(gold){
    if (gold >= 15){
      clearInterval(this.interval)
    this.first_upgrade_amount++;
    this._gameService.gold -= 15;
    this.interval = setInterval(() => {
      this._gameService.creature.hp -=10;
    }, 1000);
    }
    else alert('NOT ENOUGH Gold')   
  }
 //public fireballs(){
  
 //}

}
