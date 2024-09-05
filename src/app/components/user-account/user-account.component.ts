import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../core/services/navbar.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UserProfileComponent, RouterOutlet],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.scss'
})
export class UserAccountComponent implements OnInit {
  constructor(public _nav: NavbarService) { }

  ngOnInit(): void {
    this._nav.show();
  }
}
