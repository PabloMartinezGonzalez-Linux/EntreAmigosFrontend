import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ImportsModule } from '../../../shared/imports';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { KartingService } from '../../../events/karting/service/karting.service';
import { EventResponse } from '../../../events/karting/interfaces/karting.interface';

@Component({
  selector: 'app-update-events',
  imports: [
    ImportsModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  templateUrl: './update-events.component.html',
  styleUrl: './update-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateEventsComponent {

  constructor (){ this.kartinService.loadEvents().subscribe() }

  fb = inject(FormBuilder)
  kartinService = inject(KartingService)
  params = {}

  eventsForm = this.fb.group({
    event_id : [null],
    name : ['', Validators.required],
    sport_type : ['', Validators.required],
    event_date : ['', Validators.required],
    is_future : [false, Validators.required]
  })

  onSubmit(){
    if (this.eventsForm.invalid) {
      return;
    }

    const params = this.eventsForm.value as Partial<EventResponse> & {
      name: string; sport_type: string; event_date: string; is_future: boolean;
    };

    this.kartinService.upsertEvent(params).subscribe((canUpsert) => {
      if (canUpsert) {
        this.eventsForm.reset({ is_future: false });
      }
    })
  }

}
