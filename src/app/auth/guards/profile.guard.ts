import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const ProfileGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {

  const authService = inject(AuthService)

  if (authService.authStatus() === "authenticated") {
    return true;
  }

  return false
}
