import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitApp } from './state/app/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fourd-sight';

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new InitApp());
  }
}
