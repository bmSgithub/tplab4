import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const categoryGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  
  const UrlActual = state.url.split("/")[2];

  if(ValidarUrl(UrlActual))
  {
    return true;
  }
  else
  {
    router.navigate(["/home"])
    return false;
  }
};

function ValidarUrl(UrlActual: string): boolean {
  console.log(UrlActual);
  const UrlsValidas = ['9','8','12','11','10'];
  return UrlsValidas.includes(UrlActual);
}



