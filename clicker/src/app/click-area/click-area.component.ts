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
  
  constructor(public _gameService:GameService,
    public _upgradesService: UpgradesService) {
   
   }
  
  
  ngOnInit(): void {let x =0;
     setInterval(() => {
      
    if(this._gameService.creature.hp<=0){
      this._gameService.new_creature(100+x,'clicker game', 1, false);
      x = x+20;
      this._gameService.killed();
    }
    }, 100);
    
  }


  public swing(){
    this._gameService.creature.hp-= 10;
  }

}
