import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.scss',
})
export class TopSectionComponent {
  @Input() topHeader: string = '';
  @Input() path: string = '';
  @Input() current: string = '';
  @Input() subPath: string = '';
}
