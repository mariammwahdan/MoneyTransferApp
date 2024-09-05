import { Component, OnInit } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { AuthFooterComponent } from "../auth-footer/auth-footer.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [BtnComponent, RouterLink, AuthFooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  constructor(public _Nav: AuthService) { }
  ngOnInit() {
    this._Nav.hide();
  }

}
