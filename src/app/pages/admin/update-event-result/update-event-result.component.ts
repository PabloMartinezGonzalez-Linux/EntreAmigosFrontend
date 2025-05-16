import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { StandardFormComponent } from "../../../shared/components/standard-form/standard-form.component";

@Component({
  selector: 'app-admin',
  imports: [
    StandardFormComponent,
  ],
  templateUrl: './update-event-result.component.html',
  styleUrl: './update-event-result.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {

  selectedSport: WritableSignal<string> = signal("karting")

  updateSignal(event: Event){
    const value = (event.target as HTMLSelectElement).value;
    this.selectedSport.set(value)
  }
}
