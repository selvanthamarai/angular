import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PusherService {

  private _pusher: any;

  constructor() { 
   
  }

  getPusher() {
    return this._pusher;
  }

}
