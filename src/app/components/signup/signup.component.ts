import { Component, OnInit } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { AuthFooterComponent } from "../auth-footer/auth-footer.component";
import { countries, months, years } from '../../core/environment/signup-info.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [BtnComponent, RouterLink, AuthFooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  countries = countries
   months = months
   years:any = years
  constructor(public _Nav: AuthService) {
    const currentYear = new Date().getFullYear();
    for (let year = 1990; year <= currentYear; year++) {
      this.years.push(year);
      console.log(year)
    }
  }
  ngOnInit() {
    this._Nav.hide();
  }
}
