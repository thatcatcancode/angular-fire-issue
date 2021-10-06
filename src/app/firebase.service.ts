import { Inject, Injectable } from "@angular/core";
import { FIREBASE_APP_TOKEN } from "./app.module";
import { Database, object, ref } from '@angular/fire/database'

@Injectable({
    providedIn: 'root'
  })
export class FirebaseService {
  constructor(
    @Inject(FIREBASE_APP_TOKEN)
    private readonly db: Database,
  ) {}

  public doSomething = () => {
    const dbRef = ref(this.db, 'events/13574')
    return object(dbRef)
  }
}