import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageOne, PageTwo } from './login/page';
import { AppRoutingModule } from './app-route.routing';
import { TimeComponent } from './time/time.component';


@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    PageOne,
    PageTwo,
      TimeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
