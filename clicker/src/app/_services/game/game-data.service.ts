import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameService } from './game.service';
import { UpgradesService } from '../upgrade/upgrades.service';
@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(
   private _gameService: GameService,
   private _upgradeService: UpgradesService
    ){}
public names = ["Jacob", "Mason", "William", "Jayden", "Noah", "Michael", "Ethan", "Alexander", "Daniel"];
public randomName(){
  return this.names[Math.floor(Math.random() * this.names.length)]
}
public titles = ["The Great", "The Best", "The Strongest", "The Furious", "The Humble"];

public randomTitle(){
  return this.titles[Math.floor(Math.random() * this.titles.length)]
}
public fromJSON(json:any){
  this._gameService.gold = json.gold,
  this._gameService.gameLvl = json.gamelvl,
  this._upgradeService.first_upgrade_amount = json.firstUpgradeAmount,
  this._upgradeService.second_upgrade_amount = json.secondUpgradeAmount,
  this._upgradeService.third_upgrade_amount = json.thirdUpgradeAmount,
  this._upgradeService.fourth_upgrade_amount = json.fourthUpgradeAmount,
  this._upgradeService.fifth_upgrade_amount = json.fifthUpgradeAmount,
  this._upgradeService.first_multiplier_amount = json.firstMultiplierAmount,
  this._upgradeService.second_multiplier_amount = json.secondMultiplierAmount,
  this._upgradeService.third_multiplier_amount = json.thirdMultiplierAmount,
  this._upgradeService.fourth_multiplier_amount = json.fourthMultiplierAmount,
  this._upgradeService.fifth_multiplier_amount = json.fifthMultiplierAmount,
  this._upgradeService.first_multiplier_cost = json.firstMultiplierCost,
  this._upgradeService.second_multiplier_cost = json.secondMultiplierCost,
  this._upgradeService.third_multiplier_cost = json.thirdMultiplierCost,
  this._upgradeService.fourth_multiplier_cost = json.fourthMultiplierCost,
  this._upgradeService.fifth_multiplier_cost = json.fifthMultiplierCost,
  this._upgradeService.first_cost = json.firstCost,
  this._upgradeService.second_cost = json.secondCost,
  this._upgradeService.third_cost = json.thirdCost,
  this._upgradeService.fourth_cost = json.fourthCost,
  this._upgradeService.fifth_cost = json.fifthCost
}
public toJSON(){
  return {
    gold: this._gameService.gold,
    gamelvl: this._gameService.gameLvl,
    firstUpgradeAmount: this._upgradeService.first_upgrade_amount,
    secondUpgradeAmount: this._upgradeService.second_upgrade_amount,
    thirdUpgradeAmount: this._upgradeService.third_upgrade_amount,
    fourthUpgradeAmount: this._upgradeService.fourth_upgrade_amount,
    fifthUpgradeAmount: this._upgradeService.fifth_upgrade_amount,
    firstMultiplierAmount: this._upgradeService.first_multiplier_amount,
    secondMultiplierAmount: this._upgradeService.second_multiplier_amount,
    thirdMultiplierAmount: this._upgradeService.third_multiplier_amount,
    fourthMultiplierAmount: this._upgradeService.fourth_multiplier_amount,
    fifthMultiplierAmount: this._upgradeService.fifth_multiplier_amount,
    firstMultiplierCost: this._upgradeService.first_multiplier_cost,
    secondMultiplierCost: this._upgradeService.second_multiplier_cost,
    thirdMultiplierCost: this._upgradeService.third_multiplier_cost,
    fourthMultiplierCost: this._upgradeService.fourth_multiplier_cost,
    fifthMultiplierCost: this._upgradeService.fifth_multiplier_cost,
    firstCost: this._upgradeService.first_cost,
    secondCost: this._upgradeService.second_cost,
    thirdCost: this._upgradeService.third_cost,
    fourthCost: this._upgradeService.fourth_cost,
    fifthCost: this._upgradeService.fifth_cost
  }
}
  public saveState(){
    localStorage.setItem("ls",JSON.stringify(this.toJSON()))
  }
  public getState(){
    this.fromJSON(JSON.parse(localStorage.getItem("ls")))
    this._upgradeService.firstInterval();
    this._upgradeService.secondInterval();
    this._upgradeService.thirdInterval();
    this._upgradeService.fourthInterval();
    this._upgradeService.fifthInterval();
  }
}