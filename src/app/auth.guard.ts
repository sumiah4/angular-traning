import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    //alert('active');
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn')) {
      //alert('lll')
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}