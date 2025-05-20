import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ProfilesComponent } from './profiles/profiles.component';


@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab 4';
   constructor(){
    console.log('hello from app component constructor');
    
  }
}
