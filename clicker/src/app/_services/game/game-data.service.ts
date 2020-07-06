import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameService } from './game.service';
import { UpgradesService } from '../upgrade/upgrades.service';
@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(
   private gameService: GameService,
   private upgradeService: UpgradesService
    ){}
    public titles = ['The Great', 'The Best', 'The Strongest', 'The Furious', 'The Humble'];
public names = ['Jacob', 'Mason', 'William', 'Jayden', 'Noah', 'Michael', 'Ethan', 'Alexander', 'Daniel'];
public randomName(){
  return this.names[Math.floor(Math.random() * this.names.length)];
}


public randomTitle(){
  return this.titles[Math.floor(Math.random() * this.titles.length)];
}
public fromJSON(json: any){
  this.gameService.gold = json.gold,
  this.gameService.gameLvl = json.gamelvl,
  this.upgradeService.firstUpgradeAmount = json.firstUpgradeAmount,
  this.upgradeService.secondUpgradeAmount = json.secondUpgradeAmount,
  this.upgradeService.thirdUpgradeAmount = json.thirdUpgradeAmount,
  this.upgradeService.fourthUpgradeAmount = json.fourthUpgradeAmount,
  this.upgradeService.fifthUpgradeAmount = json.fifthUpgradeAmount,
  this.upgradeService.firstMultiplierAmount = json.firstMultiplierAmount,
  this.upgradeService.secondMultiplierAmount = json.secondMultiplierAmount,
  this.upgradeService.thirdMultiplierAmount = json.thirdMultiplierAmount,
  this.upgradeService.fourthMultiplierAmount = json.fourthMultiplierAmount,
  this.upgradeService.fifthMultiplierAmount = json.fifthMultiplierAmount,
  this.upgradeService.firstMultiplierCost = json.firstMultiplierCost,
  this.upgradeService.secondMultiplierCost = json.secondMultiplierCost,
  this.upgradeService.thirdMultiplierCost = json.thirdMultiplierCost,
  this.upgradeService.fourthMultiplierCost = json.fourthMultiplierCost,
  this.upgradeService.fifthMultiplierCost = json.fifthMultiplierCost,
  this.upgradeService.firstCost = json.firstCost,
  this.upgradeService.secondCost = json.secondCost,
  this.upgradeService.thirdCost = json.thirdCost,
  this.upgradeService.fourthCost = json.fourthCost,
  this.upgradeService.fifthCost = json.fifthCost;
}
public toJSON(){
  return {
    gold: this.gameService.gold,
    gamelvl: this.gameService.gameLvl,
    firstUpgradeAmount: this.upgradeService.firstUpgradeAmount,
    secondUpgradeAmount: this.upgradeService.secondUpgradeAmount,
    thirdUpgradeAmount: this.upgradeService.thirdUpgradeAmount,
    fourthUpgradeAmount: this.upgradeService.fourthUpgradeAmount,
    fifthUpgradeAmount: this.upgradeService.fifthUpgradeAmount,
    firstMultiplierAmount: this.upgradeService.firstMultiplierAmount,
    secondMultiplierAmount: this.upgradeService.secondMultiplierAmount,
    thirdMultiplierAmount: this.upgradeService.thirdMultiplierAmount,
    fourthMultiplierAmount: this.upgradeService.fourthMultiplierAmount,
    fifthMultiplierAmount: this.upgradeService.fifthMultiplierAmount,
    firstMultiplierCost: this.upgradeService.firstMultiplierCost,
    secondMultiplierCost: this.upgradeService.secondMultiplierCost,
    thirdMultiplierCost: this.upgradeService.thirdMultiplierCost,
    fourthMultiplierCost: this.upgradeService.fourthMultiplierCost,
    fifthMultiplierCost: this.upgradeService.fifthMultiplierCost,
    firstCost: this.upgradeService.firstCost,
    secondCost: this.upgradeService.secondCost,
    thirdCost: this.upgradeService.thirdCost,
    fourthCost: this.upgradeService.fourthCost,
    fifthCost: this.upgradeService.fifthCost
  };
}
  public saveState(){
    localStorage.setItem('ls', JSON.stringify(this.toJSON()));
  }
  public getState(){
    this.fromJSON(JSON.parse(localStorage.getItem('ls')));
    this.upgradeService.firstInterval();
    this.upgradeService.secondInterval();
    this.upgradeService.thirdInterval();
    this.upgradeService.fourthInterval();
    this.upgradeService.fifthInterval();
  }
}
