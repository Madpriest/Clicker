import { Injectable, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game/game.service'

@Injectable({
  providedIn: 'root'
})
export class UpgradesService {

  public kittensFire: Array<any> = []
  public kittensRifle: Array<any> = []
  public kittensFrost: Array<any> = []
  public kittensLightning: Array<any> = []
  public kittensKarate: Array<any> = []

  public first_cost: number = 5;
  public second_cost: number = 100;
  public third_cost: number = 1000;
  public fourth_cost: number = 15000;
  public fifth_cost: number = 30000;

  private first_interval;
  private second_interval;
  private third_interval;
  private fourth_interval;
  private fifth_interval;
  constructor(private _gameService: GameService) { }
  public first_upgrade_amount = 0;
  public second_upgrade_amount = 0;
  public third_upgrade_amount = 0;
  public fourth_upgrade_amount = 0;
  public fifth_upgrade_amount = 0;

  public first_multiplier_cost: number = 1;
  public second_multiplier_cost: number = 1;
  public third_multiplier_cost: number = 1;
  public fourth_multiplier_cost: number = 1;
  public fifth_multiplier_cost: number = 1;

  private first_upgrade_multiplier: number = 1;
  private second_upgrade_multiplier: number = 1;
  private third_upgrade_multiplier: number = 1;
  private fourth_upgrade_multiplier: number = 1;
  private fifth_upgrade_multiplier: number = 1;
  public first_multiplier_amount: number = 0;
  public second_multiplier_amount: number = 0;
  public third_multiplier_amount: number = 0;
  public fourth_multiplier_amount: number = 0;
  public fifth_multiplier_amount: number = 0;
  public first_upgrade_multiply(gold) {

    if (gold >= this.first_multiplier_cost) {

      this.first_multiplier_amount++;
      this.first_upgrade_multiplier = this.first_upgrade_multiplier * 2;
      this.firstInterval();
      this._gameService.gold -= this.first_multiplier_cost;
      this.first_multiplier_cost = this.first_multiplier_cost * 2 * this.first_upgrade_multiplier;
    }
    else alert('NOT ENOUGH Gold')
  }
  public first_upgrade(gold) {
    if (gold >= this.first_cost) {
      this.first_upgrade_amount++;
      this.firstInterval();
      this.kittensFire.length++
      this._gameService.gold -= this.first_cost;
      this.first_cost = Math.floor(Math.pow(this.first_cost, 1.15))
    }
    else alert('NOT ENOUGH Gold')
  }
  public firstInterval() {
    clearInterval(this.first_interval)
    this.first_interval = setInterval(() => {
      this._gameService.creature.hp -= 10 * this.first_upgrade_amount;
    }, 1000 / this.first_upgrade_multiplier);
  }
  public second_upgrade_multiply(gold) {

    if (gold >= this.second_multiplier_cost) {

      this.second_multiplier_amount++;
      this.second_upgrade_multiplier = this.second_upgrade_multiplier * 2;
      this.secondInterval();
      this._gameService.gold -= this.second_multiplier_cost;
      this.second_multiplier_cost = this.second_multiplier_cost * 2 * this.second_upgrade_multiplier;
    }
    else alert('NOT ENOUGH Gold')
  }
  public second_upgrade(gold) {
    if (gold >= this.second_cost) {

      this.second_upgrade_amount++;
      this.secondInterval()
      this.kittensRifle.length++
      this._gameService.gold -= this.second_cost;
      this.second_cost = Math.floor(100 * this.second_upgrade_amount / 3)

    }
    else alert('NOT ENOUGH Gold')
  }
  public secondInterval() {
    clearInterval(this.second_interval);
    this.second_interval = setInterval(() => {
      this._gameService.creature.hp -= 10 * this.second_upgrade_amount;
    }, 1000 / this.second_upgrade_multiplier);
  }
  public third_upgrade_multiply(gold) {

    if (gold >= this.third_multiplier_cost) {

      this.third_multiplier_amount++;
      this.third_upgrade_multiplier = this.third_upgrade_multiplier * 2;
      this.thirdInterval();
      this._gameService.gold -= this.third_multiplier_cost;
      this.third_multiplier_cost = this.third_multiplier_cost * 2 * this.third_upgrade_multiplier;
    }
    else alert('NOT ENOUGH Gold')
  }
  public third_upgrade(gold) {
    if (gold >= this.third_cost) {

      this.third_upgrade_amount++;
      this.thirdInterval()
      this.kittensFrost.length++;
      this._gameService.gold -= this.third_cost;
      this.third_cost = Math.floor(1000 * this.third_upgrade_amount / 3)

    }
    else alert('NOT ENOUGH Gold')
  }
  public thirdInterval() {
    clearInterval(this.third_interval);
    this.third_interval = setInterval(() => {
      this._gameService.creature.hp -= 10 * this.third_upgrade_amount;
    }, 1000 / this.third_upgrade_multiplier);
  }
  public fourth_upgrade_multiply(gold) {

    if (gold >= this.fourth_multiplier_cost) {

      this.fourth_multiplier_amount++;
      this.fourth_upgrade_multiplier = this.fourth_upgrade_multiplier * 2;
      this.fourthInterval();
      this._gameService.gold -= this.fourth_multiplier_cost;
      this.fourth_multiplier_cost = this.fourth_multiplier_cost * 2 * this.fourth_upgrade_multiplier;
    }
    else alert('NOT ENOUGH Gold')
  }
  public fourth_upgrade(gold) {
    if (gold >= this.fourth_cost) {

      this.fourth_upgrade_amount++;
      this.fourthInterval()
      this.kittensLightning.length++;
      this._gameService.gold -= this.fourth_cost;
      this.fourth_cost = Math.floor(15000 * this.fourth_upgrade_amount / 3)

    }
    else alert('NOT ENOUGH Gold')
  }
  public fourthInterval() {
    clearInterval(this.fourth_interval)
    this.fourth_interval = setInterval(() => {
      this._gameService.creature.hp -= 10 * this.fourth_upgrade_amount;
    }, 1000 / this.fourth_upgrade_multiplier);
  }
  public fifth_upgrade_multiply(gold) {

    if (gold >= this.fifth_multiplier_cost) {

      this.fifth_multiplier_amount++;
      this.fifth_upgrade_multiplier = this.fifth_upgrade_multiplier * 2;
      this.fifthInterval();
      this._gameService.gold -= this.fifth_multiplier_cost;
      this.fifth_multiplier_cost = this.fifth_multiplier_cost * 2 * this.fifth_upgrade_multiplier;
    }
    else alert('NOT ENOUGH Gold')
  }
  public fifth_upgrade(gold) {
    if (gold >= this.fifth_cost) {

      this.fifth_upgrade_amount++;
      this.fifthInterval();
      this.kittensKarate.length++;
      this._gameService.gold -= this.fifth_cost;
      this.fifth_cost = Math.floor(30000 * this.fifth_upgrade_amount / 3);

    }
    else alert('NOT ENOUGH Gold')
  }
  public fifthInterval() {
    clearInterval(this.fifth_interval)
    this.fifth_interval = setInterval(() => {
      this._gameService.creature.hp -= 10 * this.fifth_upgrade_amount;
    }, 1000 / this.fifth_upgrade_multiplier);
  }

}
