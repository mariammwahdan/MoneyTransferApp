import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../core/services/navbar.service';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent implements OnInit {
  constructor(public _nav: NavbarService) { }

  ngOnInit(): void {
    this._nav.show();
  }
}
