import { Component } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
