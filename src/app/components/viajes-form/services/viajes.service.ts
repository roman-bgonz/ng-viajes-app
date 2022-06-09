import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  constructor(private readonly http: HttpClient) {}

  private viaje$ = new BehaviorSubject<any>({});

  getViajes(): Observable<any> {
    return this.http.get(
      'https://gq2u8enro1.execute-api.us-west-1.amazonaws.com/dev/gepp/viajes',
      {
        params: new HttpParams()
          .set('wsUser', 'GEPP_CP')
          .set('numProveedor', '30-03-1161'),
      }
    );
  }

  get selectedCity$(): Observable<any> {
    return this.viaje$.asObservable();
  }

  setViaje(viaje: any): void {
    this.viaje$.next(viaje);
  }
}
