import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {

                    const authService = inject(AuthService);
  const  router = inject(Router);
  return authService.checkStatusAutenticacion()
                    .pipe(
                      tap( estaAutenticado => {
                        if(estaAutenticado){
                          router.navigate(['/home'])

                        }
                      }),
                      map(estaAutenticado => !estaAutenticado)
                    )


};
