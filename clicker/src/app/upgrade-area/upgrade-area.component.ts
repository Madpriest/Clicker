import { Component, OnInit } from '@angular/core';
import { UpgradesService } from '../_services/upgrade/upgrades.service'
import { GameService } from '../_services/game/game.service';
@Component({
  selector: 'app-upgrade-area',
  templateUrl: './upgrade-area.component.html',
  styleUrls: ['./upgrade-area.component.scss']
})
export class UpgradeAreaComponent implements OnInit {

  constructor(public _upgradesService : UpgradesService,
    public _gameService: GameService) { }

  ngOnInit(): void {
  }

}
