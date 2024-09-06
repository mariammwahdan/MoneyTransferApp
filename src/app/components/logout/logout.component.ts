import { Component } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";
import { AuthFooterComponent } from "../auth-footer/auth-footer.component";
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [BtnComponent, AuthFooterComponent, RouterLink,NgClass],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  hide:boolean = false;

  closing(){
    console.log("cloooooooooooooosed")
    this.hide = true
  }
}
