import { Component } from '@angular/core';
import { LocaldbService } from "./../services/localdb.service";
import { NavController } from '@ionic/angular';
import { ResourcePage } from '../resource/resource.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private name: String;
  constructor(private localdb: LocaldbService, private navCtrl: NavController) {}

  addName() {
    if(name!=null || name!=undefined || name!=""){

      this.localdb.setName(this.name).then(()=>{
        this.navCtrl.navigateForward('resource');
      });
    }
  }
}
