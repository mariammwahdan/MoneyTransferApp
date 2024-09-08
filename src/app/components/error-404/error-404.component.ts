import { Component, OnInit } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { TopSectionComponent } from '../../shared/top-section/top-section.component';
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { MainFooterComponent } from '../main-footer/main-footer.component';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [BtnComponent, TopSectionComponent, RouterLink, MainFooterComponent],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss',
})
export class Error404Component implements OnInit {
  constructor(public _Nav: AuthService) {}
  ngOnInit() {
    this._Nav.show();
  }
}
