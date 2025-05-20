import { CanActivateFn } from '@angular/router';

export const guardAuthGuard: CanActivateFn = (route, state) => {
  const isLogin = localStorage.getItem('token');
  if(isLogin){
    return true;
  } else {
    alert("cant't access this page");
    return false;
  }
  };
