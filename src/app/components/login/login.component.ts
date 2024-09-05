import { Component, OnInit } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(public _Nav: AuthService) { }
  ngOnInit() {
    this._Nav.hide();
  }
}
