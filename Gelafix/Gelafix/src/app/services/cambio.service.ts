import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const BASE_URL = environment.apiUrlCambio
const BASE_URL_KEY = environment.apiKeyCambio
@Injectable({
  providedIn: 'root'
})
export class CambioService {
  private http = inject(HttpClient)
  
  constructor() { }

  getCambio(){
    return this.http.get(`${BASE_URL}?access_key=${BASE_URL_KEY}`)
  }
}
