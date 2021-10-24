import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Navigate } from '../state/app/app.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  /* it would be better if this comes from assets. */
  imageUrl = 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80';

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log('asd');

    this.store.dispatch(new Navigate({ url: 'user-list' }));
  }

}
