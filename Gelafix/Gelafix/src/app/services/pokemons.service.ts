import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private http = inject(HttpClient)
  constructor() { }

  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon')
  }
}
