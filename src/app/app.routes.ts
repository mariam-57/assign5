import { Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { guardAuthGuard } from './guards/guard-auth.guard';

export const routes: Routes = [
    {path: 'profiles', component: ProfilesComponent, title: 'Home Page'},
    {path: 'register', component: RegisterComponent, title: 'Register Page'},
    {path: 'login', component: LoginComponent, title: 'login Page'},
    {path: 'produtDetails/:id', component: ProductDetailsComponent, title: 'productDetsils'},
    {path: 'products', component: ProductsComponent, title: 'products Page'},
    {path: 'cart', component: CartComponent, title: 'cart Page', canActivate:[guardAuthGuard]},
    { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  // { path: '', component:RecipeComponent },
  // wildcard route
  { path: '**', component: PageNotFoundComponent },


];
