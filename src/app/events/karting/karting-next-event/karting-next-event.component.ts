import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { PhotoService } from '../service/photoservice';
import { ImportsModule } from '../../../shared/imports';

@Component({
  selector: 'app-karting-next-event',
  imports: [
    ImportsModule
  ],
  templateUrl: './karting-next-event.component.html',
  styleUrl: './karting-next-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KartingNextEventComponent {
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
