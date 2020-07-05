import { Injectable, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game/game.service'

@Injectable({
  providedIn: 'root'
})
export class UpgradesService {

//public kittens:Array<any> = []

public first_cost:number = 5;
public second_cost:number = 100;
public third_cost:number = 1000;
public fourth_cost:number = 15000;
public fifth_cost:number = 30000;

private first_interval;
private second_interval;
private third_interval;
private fourth_interval;
private fifth_interval;
  constructor(private _gameService: GameService) { }
  public first_upgrade_amount= 0;
  public second_upgrade_amount= 0;
  public third_upgrade_amount= 0;
  public fourth_upgrade_amount= 0;
  public fifth_upgrade_amount = 0;

  public first_multiplier_cost:number = 1;

  private first_upgrade_multiplier: number = 1;
  private second_upgrade_multiplier: number = 1;
  private third_upgrade_multiplier: number = 1;
  private fourth_upgrade_multiplier: number = 1;
  private fifth_upgrade_multiplier: number = 1;
  public first_upgrade_multiply(gold){
    if (gold>= this.first_multiplier_cost){
    this.first_upgrade_multiplier =this.first_upgrade_multiplier *2 ;
    let x = this.first_cost;
    this._gameService.gold +=this.first_cost; 
    this.first_upgrade(gold);
    this.first_cost = x;
    this.first_upgrade_amount--;}
    else alert('NOT ENOUGH Gold')
  }
 
  public first_upgrade(gold){
    if (gold >= this.first_cost){
      clearInterval(this.first_interval)
    this.first_upgrade_amount++;
   // this.kittens.push(1)
    this._gameService.gold -= this.first_cost;
    this.first_cost = Math.floor(Math.pow(this.first_cost,1.15))
    this.first_interval = setInterval(() => {
      this._gameService.creature.hp -=10 * this.first_upgrade_amount;
    }, 1000 / this.first_upgrade_multiplier);
    }
    else alert('NOT ENOUGH Gold')   
  }

  public second_upgrade(gold){
    if (gold >= this.second_cost){
      clearInterval(this.second_interval)
    this.second_upgrade_amount++;
    this._gameService.gold -= this.second_cost;
    this.second_cost = Math.floor(100 * this.second_upgrade_amount/3)
    this.second_interval = setInterval(() => {
      this._gameService.creature.hp -=10 * this.second_upgrade_amount;
    }, 1000 / this.second_upgrade_multiplier);
    }
    else alert('NOT ENOUGH Gold') 
  }

  public third_upgrade(gold){
    if (gold >= this.third_cost){
      clearInterval(this.third_interval)
    this.third_upgrade_amount++;
    this._gameService.gold -= this.third_cost;
    this.third_cost = Math.floor(1000 * this.third_upgrade_amount/3)
    this.third_interval = setInterval(() => {
      this._gameService.creature.hp -=10 * this.third_upgrade_amount;
    }, 1000 / this.third_upgrade_multiplier);
    }
    else alert('NOT ENOUGH Gold') 
  }

  public fourth_upgrade(gold){
    if (gold >= this.fourth_cost){
      clearInterval(this.fourth_interval)
    this.fourth_upgrade_amount++;
    this._gameService.gold -= this.fourth_cost;
    this.fourth_cost = Math.floor(15000 * this.fourth_upgrade_amount/3)
    this.fourth_interval = setInterval(() => {
      this._gameService.creature.hp -=10 * this.fourth_upgrade_amount;
    }, 1000 / this.fourth_upgrade_multiplier);
    }
    else alert('NOT ENOUGH Gold') 
  }

  public fifth_upgrade(gold){
    if (gold >= this.fifth_cost){
      clearInterval(this.fifth_interval)
    this.fifth_upgrade_amount++;
    this._gameService.gold -= this.fifth_cost;
    this.fifth_cost = Math.floor(30000 * this.fifth_upgrade_amount/3);
    this.fifth_interval = setInterval(() => {
      this._gameService.creature.hp -=10 * this.fifth_upgrade_amount;
    }, 1000 / this.fifth_upgrade_multiplier);
    }
    else alert('NOT ENOUGH Gold') 
  }


}
