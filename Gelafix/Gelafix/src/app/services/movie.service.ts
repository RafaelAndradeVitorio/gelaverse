import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MovieDetail} from '../interfaces/movie-detail'

const apiUrl= environment.apiUrl;
const apiKey= environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient)

  constructor() { }

  getMovies() : Observable<MovieDetail>{
    return this.http.get<MovieDetail>(`${apiUrl}discover/movie?api_key=${apiKey}&page=4`);
  }
  filterMoviesForGenre(){
    return this.http.get(`${apiUrl}genre/movie/list?api_key=${apiKey}`);
  }
}
