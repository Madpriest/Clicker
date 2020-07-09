import { Injectable } from '@angular/core';
import { GameService } from 'src/app/_services/game/game.service';

@Injectable({
  providedIn: 'root'
})
export class UpgradesService {
//#region fields
  public kittensFire: Array<any> = [];
  public kittensRifle: Array<any> = [];
  public kittensFrost: Array<any> = [];
  public kittensLightning: Array<any> = [];
  public kittensKarate: Array<any> = [];
  public swordMultiplier = 1;
  public swingType = {
    type: 0,
    side: 0
  };
  public swordUpgradeCost = 100;
  public firstCost = 5;
  public secondCost = 100;
  public thirdCost = 1000;
  public fourthCost = 15000;
  public fifthCost = 30000;
  private FirstInterval;
  private SecondInterval;
  private ThirdInterval;
  private FourthInterval;
  private FifthInterval;
  constructor(private gameService: GameService) { }
  public firstUpgradeAmount = 0;
  public secondUpgradeAmount = 0;
  public thirdUpgradeAmount = 0;
  public fourthUpgradeAmount = 0;
  public fifthUpgradeAmount = 0;
  public firstMultiplierCost = 80;
  public secondMultiplierCost = 200;
  public thirdMultiplierCost = 500;
  public fourthMultiplierCost = 1000;
  public fifthMultiplierCost = 5000;
  public firstUpgradeMultiplier = 1;
  public secondUpgradeMultiplier = 1;
  public thirdUpgradeMultiplier = 1;
  public fourthUpgradeMultiplier = 1;
  public fifthUpgradeMultiplier = 1;
  public firstMultiplierAmount = 0;
  public secondMultiplierAmount = 0;
  public thirdMultiplierAmount = 0;
  public fourthMultiplierAmount = 0;
  public fifthMultiplierAmount = 0;
  //#endregion fields
  public swing_type(){
    if (this.swordMultiplier === 1){
      this.swingType.type = 1;
      this.swingType.side = Math.floor((Math.random() * 2)) + 1;
    }
    if (this.swordMultiplier === 2){
      this.swingType.type = 2;
      this.swingType.side = Math.floor((Math.random() * 2)) + 1;
    }
    if (this.swordMultiplier === 4){
      this.swingType.type = 3;
      this.swingType.side = Math.floor((Math.random() * 2)) + 1;
    }
    if (this.swordMultiplier === 8){
      this.swingType.type = 4;
      this.swingType.side = Math.floor((Math.random() * 2)) + 1;
    }
    setTimeout(() => {
      this.swingType.type = 0;
    }, 100);
  }
  public sword_upgrade(gold){
    if (gold >= this.swordUpgradeCost) {
    this.swordMultiplier = this.swordMultiplier * 2;
    this.gameService.gold -= this.swordUpgradeCost;
    this.swordUpgradeCost = Math.floor(this.swordUpgradeCost * 2.5); }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public first_upgrade_multiply(gold) {
    if (gold >= this.firstMultiplierCost) {
      this.firstMultiplierAmount++;
      this.firstUpgradeMultiplier = this.firstUpgradeMultiplier * 2;
      this.firstInterval();
      this.gameService.gold -= this.firstMultiplierCost;
      this.firstMultiplierCost = this.firstMultiplierCost * 2 * this.firstUpgradeMultiplier;
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public first_upgrade(gold) {
    if (gold >= this.firstCost) {
      this.firstUpgradeAmount++;
      this.firstInterval();
      this.kittensFire.length++;
      this.gameService.gold -= this.firstCost;
      this.firstCost = Math.floor(this.firstCost * 1.2);
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public firstInterval() {
    clearInterval(this.FirstInterval);
    this.FirstInterval = setInterval(() => {
      this.gameService.creature.hp -= 5 * this.firstUpgradeAmount;
    }, 1000 / this.firstUpgradeMultiplier);
  }
  public second_upgrade_multiply(gold) {
    if (gold >= this.secondMultiplierCost) {
      this.secondMultiplierAmount++;
      this.secondUpgradeMultiplier = this.secondUpgradeMultiplier * 2;
      this.secondInterval();
      this.gameService.gold -= this.secondMultiplierCost;
      this.secondMultiplierCost = this.secondMultiplierCost * 2 * this.secondUpgradeMultiplier;
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public second_upgrade(gold) {
    if (gold >= this.secondCost) {
      this.secondUpgradeAmount++;
      this.secondInterval();
      this.kittensRifle.length++;
      this.gameService.gold -= this.secondCost;
      this.secondCost = Math.floor(this.secondCost * 1.1);
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public secondInterval() {
    clearInterval(this.SecondInterval);
    this.SecondInterval = setInterval(() => {
      this.gameService.creature.hp -= 20 * this.secondUpgradeAmount;
    }, 1000 / this.secondUpgradeMultiplier);
  }
  public third_upgrade_multiply(gold) {
    if (gold >= this.thirdMultiplierCost) {
      this.thirdMultiplierAmount++;
      this.thirdUpgradeMultiplier = this.thirdUpgradeMultiplier * 2;
      this.thirdInterval();
      this.gameService.gold -= this.thirdMultiplierCost;
      this.thirdMultiplierCost = this.thirdMultiplierCost * 2 * this.thirdUpgradeMultiplier;
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public third_upgrade(gold) {
    if (gold >= this.thirdCost) {
      this.thirdUpgradeAmount++;
      this.thirdInterval();
      this.kittensFrost.length++;
      this.gameService.gold -= this.thirdCost;
      this.thirdCost = Math.floor(this.thirdCost * 1.1);
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public thirdInterval() {
    clearInterval(this.ThirdInterval);
    this.ThirdInterval = setInterval(() => {
      this.gameService.creature.hp -= 50 * this.thirdUpgradeAmount;
    }, 1000 / this.thirdUpgradeMultiplier);
  }
  public fourth_upgrade_multiply(gold) {
    if (gold >= this.fourthMultiplierCost) {
      this.fourthMultiplierAmount++;
      this.fourthUpgradeMultiplier = this.fourthUpgradeMultiplier * 2;
      this.fourthInterval();
      this.gameService.gold -= this.fourthMultiplierCost;
      this.fourthMultiplierCost = this.fourthMultiplierCost * 2 * this.fourthUpgradeMultiplier;
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public fourth_upgrade(gold) {
    if (gold >= this.fourthCost) {
      this.fourthUpgradeAmount++;
      this.fourthInterval();
      this.kittensLightning.length++;
      this.gameService.gold -= this.fourthCost;
      this.fourthCost = Math.floor(this.fourthCost * 1.1);
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public fourthInterval() {
    clearInterval(this.FourthInterval);
    this.FourthInterval = setInterval(() => {
      this.gameService.creature.hp -= 100 * this.fourthUpgradeAmount;
    }, 1000 / this.fourthUpgradeMultiplier);
  }
  public fifth_upgrade_multiply(gold) {

    if (gold >= this.fifthMultiplierCost) {
      this.fifthMultiplierAmount++;
      this.fifthUpgradeMultiplier = this.fifthUpgradeMultiplier * 2;
      this.fifthInterval();
      this.gameService.gold -= this.fifthMultiplierCost;
      this.fifthMultiplierCost = this.fifthMultiplierCost * 2 * this.fifthUpgradeMultiplier;
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public fifth_upgrade(gold) {
    if (gold >= this.fifthCost) {
      this.fifthUpgradeAmount++;
      this.fifthInterval();
      this.kittensKarate.length++;
      this.gameService.gold -= this.fifthCost;
      this.fifthCost = Math.floor(this.fifthCost * 1.1);
    }
    else{ alert('NOT ENOUGH Gold'); }
  }
  public fifthInterval() {
    clearInterval(this.FifthInterval);
    this.FifthInterval = setInterval(() => {
      this.gameService.creature.hp -= 500 * this.fifthUpgradeAmount;
    }, 1000 / this.fifthUpgradeMultiplier);
  }

}
