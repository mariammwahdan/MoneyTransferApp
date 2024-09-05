import { Component, inject, OnInit } from '@angular/core';
import { NavbarService } from '../../core/services/navbar.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  constructor(public _nav: NavbarService) { }


  ngOnInit(): void {
    this._nav.hide();
  }
}

