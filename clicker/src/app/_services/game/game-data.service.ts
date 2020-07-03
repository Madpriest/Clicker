import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NPC } from 'src/app/app.component';
@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(
   private _httpClient: HttpClient
    ){}

  public getNPC():Observable<NPC[]>{
    return this._httpClient.get<NPC[]>('assets/npc-list.json')
  }
}
