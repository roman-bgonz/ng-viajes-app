import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ViajesService } from '../services/viajes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent {
  public viaje = this.viajesService.selectedCity$;

  private folio = '';

  constructor(
    private readonly viajesService: ViajesService,
    private readonly route: ActivatedRoute
  ) {
    route.queryParams.subscribe((params: Params) => {
      this.folio = params['folio'];

      const viajes: any = [];

      const detalle = viajes.find(
        (v: any) => v.datosFolio.FolioGEPP === this.folio
      );
    });
  }
}
