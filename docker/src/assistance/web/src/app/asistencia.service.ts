import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

// import { Http, Response } from '@angular/http';
// import { HttpParams, HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

import {HttpClient, HttpParams} from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { Reporte } from './entities/reporte';
import { Dispositivo } from './entities/dispositivo';



const ASSISTANCE_API_URL = environment.assistanceApiUrl;

@Injectable()
export class AsistenciaService {

  // reportes: Reporte[] = [];

  constructor(private http: HttpClient) { }

  buscarDispositivos(): Promise<Dispositivo[]> {
    return new Promise((resolve, reject) => {
      let apiUrl = `${ASSISTANCE_API_URL}/dispositivos`
      this.http.get<string[]>(apiUrl)
        .toPromise()
        .then(
          res => {
            resolve(res.map(d => new Dispositivo(d)));
          }
        )
    });
  }

  buscarDispositivo(id:String): Promise<Dispositivo> {
    return new Promise((resolve, reject) => {
      let apiUrl = `${ASSISTANCE_API_URL}/dispositivos/${id}`
      this.http.get<string[]>(apiUrl)
        .toPromise()
        .then(
          res => {
            resolve(new Dispositivo(res));
          }
        )
    });
  }


  buscarReporte(uid: string, sdate: Date, edate: Date): Promise<Reporte[]> {
    return new Promise((resolve, reject) => {
      let params = new HttpParams();
      params = params.append('sdate', sdate.toISOString());
      params = params.append('edate', edate.toISOString());

      let apiUrl = `${ASSISTANCE_API_URL}/usuarios/${uid}/reporte`
      this.http.get<string[]>(apiUrl, {params:params})
        .toPromise()
        .then(
          res => {
            resolve(res.map(k => new Reporte(k)));
          }
        )
    });
  }


  crearDispositivo(dispositivo: Dispositivo): Promise<Dispositivo> {
    return new Promise((resolve, reject) => {
      let apiUrl = `${ASSISTANCE_API_URL}/dispositivo/`
      this.http.post<Dispositivo>(apiUrl, dispositivo)
        .toPromise()
        .then(
          res => {
            resolve(res);
          }
        )
    });
  }

  agregarReporte(reporte: Reporte) {
    // this.reportes.push(reporte);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
