import { Component, OnInit } from '@angular/core';
import { TopSectionComponent } from "../../shared/top-section/top-section.component";
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [TopSectionComponent],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.scss'
})
export class HelpPageComponent implements OnInit {
  constructor(public _Nav: AuthService) { }
  ngOnInit() {
    this._Nav.show();
  }
}
