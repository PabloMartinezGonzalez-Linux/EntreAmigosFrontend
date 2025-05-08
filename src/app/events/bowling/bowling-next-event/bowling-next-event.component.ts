import { ChangeDetectionStrategy, Component, model, OnInit } from '@angular/core';
import { PhotoService } from '../services/photoservice';
import { ImportsModule } from '../../../shared/imports';


@Component({
  selector: 'app-bowling-next-event',
  imports: [
    ImportsModule
  ],
  templateUrl: './bowling-next-event.component.html',
  styleUrl: './bowling-next-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BowlingNextEventComponent{
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
