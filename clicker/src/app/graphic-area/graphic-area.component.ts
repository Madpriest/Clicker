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

  constructor(public _upgradeService:UpgradesService,
    private _gameService:GameService
    ) { }

  ngOnInit(): void {
  }
  public first(){
    this._upgradeService.first_upgrade_multiply(this._gameService.gold);
  }
  public second(){
    this._upgradeService.second_upgrade_multiply(this._gameService.gold);
  }
  public third(){
    this._upgradeService.third_upgrade_multiply(this._gameService.gold);
  }
  public fourth(){
    this._upgradeService.fourth_upgrade_multiply(this._gameService.gold);
  }
  public fifth(){
    this._upgradeService.fifth_upgrade_multiply(this._gameService.gold);
  }

}
