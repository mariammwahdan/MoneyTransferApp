import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { TopSectionComponent } from "../../shared/top-section/top-section.component";

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [BtnComponent, TopSectionComponent],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss'
})
export class Error404Component {

}
