import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bowling-events',
  imports: [],
  templateUrl: './bowling-events.component.html',
  styleUrl: './bowling-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BowlingEventsComponent { }
