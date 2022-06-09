import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/viajes-form/detalle/detalle.component';
import { ViajesFormComponent } from './components/viajes-form/viajes-form.component';

const routes: Routes = [
  {
    path: 'viajes',
    component: ViajesFormComponent,
  },
  {
    path: 'viajes/detalle',
    component: DetalleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
