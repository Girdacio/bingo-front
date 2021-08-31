import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaComponent } from './marca/marca.component';
import { ModeloComponent } from './modelo/modelo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BingoComponent } from './bingo/bingo.component';
import { CookieService } from 'ngx-cookie-service';

const angularComponentsModules = [
  MatSliderModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  MatExpansionModule,
  MatIconModule
];

const applicationComponents = [
  AppComponent,
  WelcomeComponent,
  MarcaComponent,
  ModeloComponent,
  BingoComponent
];

const angularModules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule
];

@NgModule({
  declarations: [
    ...applicationComponents    
  ],
  imports: [
    ...angularModules,
    ...angularComponentsModules
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
