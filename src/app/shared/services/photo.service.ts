import { Injectable } from '@angular/core';
import { ImageService } from '../interfaces/image-service.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  images: ImageService[] = []

  setImages( newImages: ImageService[] ): void{
    this.images = newImages
  }

  getData(): ImageService[]{
      return this.images;
  }

  getImages() {
      return Promise.resolve(this.getData());
  }
};
