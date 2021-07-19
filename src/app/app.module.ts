import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MarcaComponent } from './marca/marca.component';
import { ModeloComponent } from './modelo/modelo.component';
import { AnoComponent } from './ano/ano.component';
import { OpcionalComponent } from './opcional/opcional.component';
import { TesteWebSocketComponent } from './teste-web-socket/teste-web-socket.component';

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
  ModeloComponent  
];

@NgModule({
  declarations: [
    ...applicationComponents,
    AnoComponent,
    OpcionalComponent,
    TesteWebSocketComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...angularComponentsModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
