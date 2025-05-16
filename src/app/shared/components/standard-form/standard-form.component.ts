import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { ImportsModule } from '../../imports';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { KartingService } from '../../../events/karting/service/karting.service';
import { MessageService } from 'primeng/api';
import { FormService } from '../../services/form.service';
import { SportService } from '../../services/sport.service';

@Component({
  selector: 'app-standard-form',
  imports: [
    ImportsModule,
    ReactiveFormsModule,
    TitleCasePipe
  ],
  providers: [MessageService],
  templateUrl: './standard-form.component.html',
  styleUrl: './standard-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardFormComponent implements OnInit{

  constructor( private messageService: MessageService ) {}

  fb = inject(FormBuilder);
  formService = inject(FormService)
  sportService = inject(SportService)

  @Input() sport: string = 'karting';

  form!: FormGroup
  sportServiceType!: any

  ngOnInit() {
    this.sportServiceType = this.sportService.getService(this.sport);
    this.form = this.formService.getForm(this.sport);
    this.sportServiceType.loadEvents().subscribe();
  }

  loadUsers( event: Event ){
    const selectElement = event.target as HTMLSelectElement;

    if (selectElement?.value) {
      this.sportServiceType.loadDataByEventId(Number(selectElement?.value)).subscribe()
    }
  }

  getInputs() { return this.formService.getInputs(this.sport) }

  getForm() { return this.formService.getForm(this.sport) }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales inválidas', life: 3000 });
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Base de datos actualizada', life: 3000 });
  }

  onSubmit(){
    const { event_id, user_id, position, quick_lap, average_time } = this.form.value;

    const values = {
      event_id: Number(event_id),
      user_id: Number(user_id),
      position: Number(position),
      quick_lap,
      average_time
    };

    this.sportServiceType.updateEventResult(values.event_id, values.user_id, values.position, quick_lap, average_time).subscribe((canUpdate: boolean) => {
      if (canUpdate) {
        this.form.reset()
        this.showSuccess()
      } else {
        this.showError()
      }
    })
  }


}
