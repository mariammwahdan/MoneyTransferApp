import { Component } from '@angular/core';
import { TopSectionComponent } from "../../shared/top-section/top-section.component";

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [TopSectionComponent],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.scss'
})
export class HelpPageComponent {

}
