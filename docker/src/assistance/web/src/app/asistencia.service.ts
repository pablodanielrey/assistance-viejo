import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Reporte } from './reporte';
import { Http, Response } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const ASSISTANCE_API_URL = environment.assistanceApiUrl;

@Injectable()
export class AsistenciaService {

  // reportes: Reporte[] = [];

  constructor(private http: Http) { }

  buscarReporte(uid: string, sdate: Date, edate: Date): Observable<Reporte[]> {
    let params =  new HttpParams();
    params.append('sdate', sdate.toString());
    params.append('edate', edate.toString());

    return this.http
      .get(ASSISTANCE_API_URL + '/usuarios/' + uid + '/reporte/', {params: params})
      .map(response => {
        const reportes = response.json();
        return reportes.map((r) => new Reporte(r));
      })
      .catch(this.handleError);
  }

  agregarReporte(reporte: Reporte) {
    // this.reportes.push(reporte);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
