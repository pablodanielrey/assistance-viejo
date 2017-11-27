import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Reporte } from './reporte';
// import { Http, Response } from '@angular/http';
// import { HttpParams, HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

import {HttpModule, Http, Response} from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


const ASSISTANCE_API_URL = environment.assistanceApiUrl;

@Injectable()
export class AsistenciaService {

  // reportes: Reporte[] = [];

  constructor(private http: Http) { }

  buscarReporte(uid: string, sdate: Date, edate: Date): Promise<Reporte[]> {
    return new Promise((resolve, reject) => {
      let apiUrl = `${ASSISTANCE_API_URL}/usuarios/${uid}/reporte/sdate=${sdate.toString()}&edate=${edate.toString()}`
      this.http.get(apiUrl)
        .toPromise()
        .then(
          res => {
            console.log(res.json());
            resolve();
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
