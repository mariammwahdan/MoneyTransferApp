import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../core/services/navbar.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit {
  constructor(public _nav: NavbarService) { }

  ngOnInit(): void {
    this._nav.show();
  }
}
