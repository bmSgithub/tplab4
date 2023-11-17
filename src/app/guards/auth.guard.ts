import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { tap } from 'rxjs';
import { User } from '../core/Models';
import { ApiService } from '../core/services/api.service';

export const authGuard: CanActivateFn =  (route, state) => {

   const authService = inject(AuthService);
   const  router = inject(Router);
 
   return authService.checkStatusAutenticacion()
    .pipe(
      tap( estaAutenticado => {
        if(!estaAutenticado) router.navigate(['/landing'])
      } )
    )

};
