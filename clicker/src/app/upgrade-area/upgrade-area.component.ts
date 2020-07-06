import { Component, OnInit } from '@angular/core';
import { UpgradesService } from '../_services/upgrade/upgrades.service';
import { GameService } from '../_services/game/game.service';
@Component({
  selector: 'app-upgrade-area',
  templateUrl: './upgrade-area.component.html',
  styleUrls: ['./upgrade-area.component.scss'],
})
export class UpgradeAreaComponent implements OnInit {

  constructor(public upgradesService: UpgradesService, public gameService: GameService) { }
  public firstDPS = this.upgradesService.firstUpgradeMultiplier * 5;
  public secondDPS = this.upgradesService.secondUpgradeMultiplier * 20;
  public thirdDPS = this.upgradesService.thirdUpgradeMultiplier * 50;
  public fourthDPS = this.upgradesService.fourthUpgradeMultiplier * 100;
  public fifthDPS = this.upgradesService.fifthUpgradeMultiplier * 500;
 ngOnInit(): void {
  }

}
