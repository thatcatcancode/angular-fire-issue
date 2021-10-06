import { Component, Inject, OnInit } from '@angular/core';
import { FIREBASE_SERVICE } from './app.module';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    @Inject(FIREBASE_SERVICE)
    private readonly firebaseService: FirebaseService,
  ) {}
  ngOnInit(): void {
    this.firebaseService.doSomething()
  }
  title = 'angular-fire-issue';
}
