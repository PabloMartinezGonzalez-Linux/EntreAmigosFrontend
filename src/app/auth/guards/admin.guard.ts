import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { firstValueFrom } from 'rxjs';

export const AdminGuard: CanMatchFn = async (
  route: Route,
  segments: UrlSegment[]
) => {

    const authService = inject(AuthService)
    const router = inject(Router)

    const isAdmin = authService.user()?.role_id === 1
    if (!isAdmin) {
      router.navigateByUrl("/")
      return false
    }

    return true;
}
