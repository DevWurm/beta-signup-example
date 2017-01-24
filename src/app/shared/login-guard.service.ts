import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
      if (environment.beta) {

        if (route.queryParams['secret'] == "MySuperSecret") {
          return true;
        }

        this.router.navigate(["beta"]);
        return false;
      } else {
        return true;
      }
  }
}
