import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetalleComponent } from './components/viajes-form/detalle/detalle.component';
import { ViajesFormComponent } from './components/viajes-form/viajes-form.component';

@NgModule({
  declarations: [AppComponent, ViajesFormComponent, DetalleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
