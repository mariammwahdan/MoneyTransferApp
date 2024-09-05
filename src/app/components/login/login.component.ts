import { Component, inject, OnInit } from '@angular/core';
import { NavbarService } from '../../core/services/navbar.service';
import { Router } from 'express';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(public _nav: NavbarService) { }


  ngOnInit(): void {
    this._nav.hide();
  }

}

