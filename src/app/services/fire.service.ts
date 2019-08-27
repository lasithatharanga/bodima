import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

export interface User { name: string; }

@Injectable({
  providedIn: 'root'
})
export class FireService {
  private itemsCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  item: Observable<any>;
  constructor(private afs: AngularFirestore,
    db: AngularFireDatabase) {
    this.itemsCollection = afs.collection<User>('users');
    this.users = this.itemsCollection.valueChanges();
    this.item = db.object('item').valueChanges();
  }

  addUser(user: User) {
    this.itemsCollection.add(user);
  }

}
