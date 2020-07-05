import { Component, OnInit } from '@angular/core';
import { GameService } from '../_services/game/game.service'
import { Creature } from '../app.component';
import { UpgradesService } from '../_services/upgrade/upgrades.service';



@Component({
  selector: 'app-click-area',
  templateUrl: './click-area.component.html',
  styleUrls: ['./click-area.component.scss']
})
export class ClickAreaComponent implements OnInit {

  public monster:Creature
  public max_hp:number = 100;
  
  constructor(public _gameService:GameService,
    public _upgradesService: UpgradesService) {
   
   }
   public randomInt(max){
     return Math.floor(Math.random() * Math.floor(max)) +1
   }

   public type:number = this._gameService.creature.type
  ngOnInit(): void {let x =0;
     setInterval(() => {
      
    if(this._gameService.creature.hp<=0){
      this._gameService.new_creature(100+x,'clicker game', 1, false, this.randomInt(2));
      x = x+20;
      this._gameService.killed();
       this.max_hp = this._gameService.creature.hp;
       this.type = this._gameService.creature.type;
    }
    }, 100);
    
  }


  public swing(){
    this._gameService.creature.hp-= 10;
    let health = document.getElementById("health")
//health.value-= 10;
  }

}
