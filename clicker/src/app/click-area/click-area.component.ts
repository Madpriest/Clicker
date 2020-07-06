/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';

import { GameService } from '../_services/game/game.service';

import { Creature } from '../app.component';

import { UpgradesService } from '../_services/upgrade/upgrades.service';
import { GameDataService } from '../_services/game/game-data.service';

@Component({
  selector: 'app-click-area',
  templateUrl: './click-area.component.html',
  styleUrls: ['./click-area.component.scss'],
})
export class ClickAreaComponent implements OnInit {
  public monster:Creature;
  public max_hp = 100;
  public type:number = this._gameService.creature.type;
  constructor(public _gameService:GameService,
    public _upgradesService: UpgradesService,
    public _gameDataService: GameDataService) {
  }
  private multiplier = 1;
  private kittens = [1,2,3]
  static randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }
  ngOnInit(): void {
    if (localStorage.getItem("ls")){
      this._gameDataService.getState();
    }
    else{
      this._gameService.new_creature(Math.floor(100*1.1*this._gameService.gameLvl), this._gameDataService.randomName(), this._gameDataService.randomTitle(),1, false, ClickAreaComponent.randomInt(2));
    }
    setInterval(()=>{
      this._gameDataService.saveState()
    }, 100000)
    setInterval(() => {
      if (this._gameService.creature.hp <= 0) {
        this._gameService.new_creature(Math.floor(100*1.1*this._gameService.gameLvl), this._gameDataService.randomName(), this._gameDataService.randomTitle(),1, false, ClickAreaComponent.randomInt(2));
        this._gameService.killed();
        this.max_hp = this._gameService.creature.hp;
        this.type = this._gameService.creature.type;
      }
    }, 100);
    this._gameService.dayNight()
  }
  public swing() {
    if (this._gameService.isDay == true){
      this._gameService.creature.hp -= 10 * this.multiplier;
    }
    else this._gameService.creature.hp -= 10 * this.multiplier *2 ;
  }
}
