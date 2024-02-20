import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutTheAuthorComponent } from './pages/about-the-author/about-the-author.component';
import { DividerComponent } from './components/divider/divider.component';
import { HeaderComponent } from './components/header/header.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    ServicesComponent,
    HomeComponent,
    AboutTheAuthorComponent,
    DividerComponent,
    HeaderComponent,
    FlipCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
