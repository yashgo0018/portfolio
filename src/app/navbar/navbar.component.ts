import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggle = false;
  constructor() {}

  ngOnInit() {}

  openNav() {
    this.toggle = !this.toggle;
  }

  lickClick() {
    this.toggle = false;
  }
}
