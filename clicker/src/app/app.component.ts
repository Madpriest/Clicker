import { Component } from '@angular/core';
import { GameService } from './_services/game/game.service';
import { UpgradesService } from './_services/upgrade/upgrades.service';
export interface NPC{
  hp: number;
  name: string;
}
export interface Creature{
  hp: number;
  name: string;
  title: string;
  lvl: number;
  rare: boolean;
  type: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clicker';
  constructor(public gameService: GameService) {
  }
}
