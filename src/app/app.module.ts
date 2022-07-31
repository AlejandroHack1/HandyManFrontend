import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReporteServicioComponent } from './reporte-servicio/reporte-servicio.component';
import {CalculoHorasTrabajoComponent} from './calculo-horas-trabajo/calculo-horas-trabajo.component';
import {HomeComponent} from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ReporteServicioComponent,
    CalculoHorasTrabajoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
