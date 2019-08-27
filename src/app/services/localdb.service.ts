import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class LocaldbService {

  constructor(private storage: Storage) { 

  }

  setName(name):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      console.log(name);
      resolve (this.storage.set("name", name));
    });
  
  }

  getName(): Promise<any>{
    return new Promise<any>((resolve, reject) =>{
      resolve (this.storage.get("name"));
    })
  }
}
