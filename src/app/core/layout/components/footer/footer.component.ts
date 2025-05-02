import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  currentRoute: WritableSignal<string> = signal('')

  isHomePage: Signal<string> = computed(() => {
    switch(this.currentRoute()){
      case '/': {
        return "footer-home"
      }
      default:{
        return "default"
      }
    }
  })

  constructor(router: Router){
    router.events.pipe(
      filter( (event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.url)
      })
  }

}
