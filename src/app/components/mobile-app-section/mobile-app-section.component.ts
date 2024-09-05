import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../core/services/navbar.service';

@Component({
  selector: 'app-mobile-app-section',
  standalone: true,
  imports: [],
  templateUrl: './mobile-app-section.component.html',
  styleUrl: './mobile-app-section.component.scss'
})
export class MobileAppSectionComponent implements OnInit {
  constructor(public _nav: NavbarService) { }

  ngOnInit(): void {
    this._nav.show();
  }
}
