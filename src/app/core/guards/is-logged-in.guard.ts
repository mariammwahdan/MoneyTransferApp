import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  if (localStorage.getItem('token') != null) {
    // _Router.navigate(['/transferMoney']);
    return true;
  } else {
    _Router.navigate(['/login']);
    return false;
  }
};
