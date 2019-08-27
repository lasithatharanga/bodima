import { Component } from '@angular/core';
import { LocaldbService } from "./../services/localdb.service";
import { NavController } from '@ionic/angular';
import { ResourcePage } from '../resource/resource.page';
import { FireService, User } from '../services/fire.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private name: String;
  users;
  item;
  constructor(
    private localdb: LocaldbService, 
    private navCtrl: NavController,
    private fire: FireService) {
      this.users = fire.users;
      this.item = fire.item;
      console.log(this.users);
    }

  addName(form) {

      console.log(form.value);
      
      this.localdb.setName(form.value.name).then(()=>{
        const name: User = {
          name : form.value.name
        }
        this.fire.addUser(name);
        //console.log(form.value.name);
        this.navCtrl.navigateRoot('resource');
      });
  }
}
