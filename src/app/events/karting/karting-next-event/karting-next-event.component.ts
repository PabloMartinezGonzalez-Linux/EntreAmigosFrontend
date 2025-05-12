import { ChangeDetectionStrategy, Component, model, inject } from '@angular/core';
import { ImportsModule } from '../../../shared/imports';
import { ImageService } from '../../../shared/interfaces/image-service.interface';
import { PhotoService } from '../../../shared/services/photo.service';

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

  photoService = inject(PhotoService)

  images = model<ImageService[]>([]);

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

  ngOnInit() {

    const kartingPhoto: ImageService[] = [
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5'
      },
    ]

    this.photoService.setImages(kartingPhoto)

    this.photoService.getImages().then((images) => this.images.set(images));
  }
}
