import { PhotoService } from '../service/photoservice';
import { ImportsModule } from './../../../../shared/imports';
import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'app-padel-next-event',
  imports: [
    ImportsModule
  ],
  templateUrl: './padel-next-event.component.html',
  styleUrl: './padel-next-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadelNextEventComponent {
  images = model<any[]>([]);

  responsiveOptions: any[] = [
      {
          breakpoint: '1300px',
          numVisible: 4
      },
      {
          breakpoint: '575px',
          numVisible: 1
      }
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
      this.photoService.getImages().then((images) => this.images.set(images));
  }
}
