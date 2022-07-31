import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CalculoHorasTrabajoComponent } from './calculo-horas-trabajo/calculo-horas-trabajo.component';
import { HomeComponent } from './home/home.component';
import { ReporteServicioComponent } from './reporte-servicio/reporte-servicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculo', component: CalculoHorasTrabajoComponent },
  { path: 'reporte', component: ReporteServicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
