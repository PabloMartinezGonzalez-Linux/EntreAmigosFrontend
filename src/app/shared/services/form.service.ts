import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormService {
  private fb = inject(FormBuilder);

  getForm(sport: string): FormGroup {
    switch (sport) {
      case 'karting':
        return this.fb.group({
          event_id: [0, Validators.required],
          user_id: [0, Validators.required],
          position: [0, Validators.required],
          quick_lap: ['', Validators.required],
          average_time: ['', Validators.required],
        });
      case 'padel':
        return this.fb.group({
          event_id: [0, Validators.required],
          user_id: [0, Validators.required],
          position: [0, Validators.required],
          quick_lap: ['', Validators.required],
        });
      default:
        throw new Error(`No form defined for sport: ${sport}`);
    }
  }

  getInputs(sport: string): { name: string; type: string }[] {
    switch (sport) {
      case 'karting':
        return [
          { name: 'position', type: 'number' },
          { name: 'quick_lap', type: 'text' },
          { name: 'average_time', type: 'text' },
        ];
      case 'padel':
        return [
          { name: 'position', type: 'number' },
          { name: 'quick_lap', type: 'text' },
        ];
      default:
        return [];
    }
  }
}
