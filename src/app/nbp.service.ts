import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbpService {

  constructor(
    private http: HttpClient
  ) { }

  getNbpData():Observable<any> {
    return this.http.get('https://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json')
  }
}
