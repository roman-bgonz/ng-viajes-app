import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajesService } from './services/viajes.service';

@Component({
  selector: 'app-viajes-form',
  templateUrl: './viajes-form.component.html',
  styleUrls: ['./viajes-form.component.css'],
})
export class ViajesFormComponent implements OnInit {
  viajes: Array<any> = [];

  constructor(
    private readonly viajesService: ViajesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.viajesService.getViajes().subscribe({
      next: (resp: any) => {
        this.viajes = resp.viajes;
      },
    });
  }

  verDetalle(viaje: any) {
    this.viajesService.setViaje(viaje);
    this.router.navigate(['viajes/detalle'], {
      queryParams: { folio: viaje.datosFolio.FolioGEPP },
    });
  }
}
