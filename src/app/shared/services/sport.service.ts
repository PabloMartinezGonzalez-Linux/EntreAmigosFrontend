import { inject, Injectable } from '@angular/core';
import { KartingService } from '../../events/karting/service/karting.service';

@Injectable({ providedIn: 'root' })
export class SportService {
  constructor() {}

  kartingService = inject(KartingService)

  getService(sport: string) {
    switch (sport) {
      case 'karting':
        return this.kartingService;
      case 'padel':
        return this.kartingService;
      default:
        return this.kartingService;
    }
  }
}
