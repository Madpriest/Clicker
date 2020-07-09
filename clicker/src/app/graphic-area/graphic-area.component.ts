import { Component, OnInit } from '@angular/core';
import { UpgradesService } from '../_services/upgrade/upgrades.service';
import { GameService } from '../_services/game/game.service';
import { stringify } from 'querystring';
import { GameDataService } from '../_services/game/game-data.service';

@Component({
  selector: 'app-graphic-area',
  templateUrl: './graphic-area.component.html',
  styleUrls: ['./graphic-area.component.scss']
})
export class GraphicAreaComponent implements OnInit {

  constructor(public upgradeService: UpgradesService, private gameService: GameService, ) { }

  ngOnInit(): void {
  }
  public sword(){
    this.upgradeService.sword_upgrade(this.gameService.gold);
  }
  public first(){
    this.upgradeService.first_upgrade_multiply(this.gameService.gold);
  }
  public second(){
    this.upgradeService.second_upgrade_multiply(this.gameService.gold);
  }
  public third(){
    this.upgradeService.third_upgrade_multiply(this.gameService.gold);
  }
  public fourth(){
    this.upgradeService.fourth_upgrade_multiply(this.gameService.gold);
  }
  public fifth(){
    this.upgradeService.fifth_upgrade_multiply(this.gameService.gold);
  }

}
