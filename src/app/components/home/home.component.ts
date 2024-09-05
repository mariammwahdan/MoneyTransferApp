import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../core/services/navbar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(public _nav: NavbarService) { }

  ngOnInit(): void {
    this._nav.show();
  }
}
