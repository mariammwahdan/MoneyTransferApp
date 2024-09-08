import { Component, OnInit } from '@angular/core';
import { TopSectionComponent } from '../../shared/top-section/top-section.component';
import { AuthService } from '../../core/services/auth.service';
import { MainFooterComponent } from '../main-footer/main-footer.component';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [TopSectionComponent, MainFooterComponent],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.scss',
})
export class HelpPageComponent implements OnInit {
  constructor(public _Nav: AuthService) {}
  ngOnInit() {
    this._Nav.show();
  }
}
