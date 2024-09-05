import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../core/services/navbar.service';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss'
})
export class MoneyTransferComponent implements OnInit {
  constructor(public _nav: NavbarService) { }

  ngOnInit(): void {
    this._nav.show();
  }
}
