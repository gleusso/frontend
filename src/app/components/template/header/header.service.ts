import { HerderData } from './../../product/header-data.models';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _hederData = new BehaviorSubject<HerderData>({
    title: 'Inicio',
    icon: 'home',
     routeUrl: ''
  })

  constructor() { }

  get herderData(): HerderData {
    return this._hederData.value
  }

  set herderData(herderData: HerderData) {
    this._hederData.next(herderData);
  }
}
