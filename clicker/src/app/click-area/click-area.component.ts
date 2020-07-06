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
  public monster: Creature;
  public maxHp = 100;
  public type: number = this.gameService.creature.type;
  constructor(public gameService: GameService, public upgradesService: UpgradesService, public gameDataService: GameDataService) {
  }
  private multiplier = 1;
  static randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }
  ngOnInit(): void {
    if (localStorage.getItem('ls')){
      this.gameDataService.getState();
      this.gameService.new_creature(Math.floor(100 * 1.1 * this.gameService.gameLvl),
      this.gameDataService.randomName(), this.gameDataService.randomTitle(), 1, false, ClickAreaComponent.randomInt(2));
      this.upgradesService.kittensFire.length = this.upgradesService.firstUpgradeAmount;
      this.upgradesService.kittensRifle.length = this.upgradesService.secondUpgradeAmount;
      this.upgradesService.kittensFrost.length = this.upgradesService.thirdUpgradeAmount;
      this.upgradesService.kittensLightning.length = this.upgradesService.fourthUpgradeAmount;
      this.upgradesService.kittensKarate.length = this.upgradesService.fifthUpgradeAmount;
}
    setInterval(() => {
      this.gameDataService.saveState();
    }, 200000);
    setInterval(() => {
      if (this.gameService.creature.hp <= 0) {
        this.gameService.new_creature(Math.floor(50 * 1.1 * this.gameService.gameLvl),
         this.gameDataService.randomName(), this.gameDataService.randomTitle(), 1, false, ClickAreaComponent.randomInt(2));
        this.gameService.killed();
        this.maxHp = this.gameService.creature.hp;
        this.type = this.gameService.creature.type;
      }
    }, 100);
    this.gameService.dayNight();
  }
  public swing() {
    if (this.gameService.isDay === true){
      this.gameService.creature.hp -= 10 * this.multiplier;
    }
    else{ this.gameService.creature.hp -= 10 * this.multiplier * 2; }
  }
}
