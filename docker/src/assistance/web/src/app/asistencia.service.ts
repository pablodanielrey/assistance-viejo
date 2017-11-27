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



const ASSISTANCE_API_URL = environment.assistanceApiUrl;

@Injectable()
export class AsistenciaService {

  // reportes: Reporte[] = [];

  constructor(private http: HttpClient) { }

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
            //console.log(res.json());
            console.log(res);
            let r = res[0];
            let rep = new Reporte(r);
            rep.initialize(r);
            console.log(r['total_segundos_trabajados']);
            console.log(rep);
            resolve(res.map(k => new Reporte(k)));
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
