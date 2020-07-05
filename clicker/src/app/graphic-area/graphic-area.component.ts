import { Component, OnInit } from '@angular/core';
import { UpgradesService } from '../_services/upgrade/upgrades.service';
import { GameService } from '../_services/game/game.service';

@Component({
  selector: 'app-graphic-area',
  templateUrl: './graphic-area.component.html',
  styleUrls: ['./graphic-area.component.scss']
})
export class GraphicAreaComponent implements OnInit {

  constructor(private _upgradeService:UpgradesService,
    private _gameService:GameService) { }

  ngOnInit(): void {
  }
  public first(){
    this._upgradeService.first_upgrade_multiply(this._gameService.gold);
  }
}
