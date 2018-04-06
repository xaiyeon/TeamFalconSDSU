import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const el = document.createElement('script');
    el.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    document.body.appendChild(el);
  }

}
