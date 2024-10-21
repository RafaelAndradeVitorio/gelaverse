import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const BASE_URL: string= 'https://rickandmortyapi.com/api/character'
@Injectable({
  providedIn: 'root'
})
export class PostService {
private http = inject(HttpClient)
  constructor() { }
  getPosts(){
    return this.http.get(BASE_URL)
  }

  skipPage(url: string){   
    console.log('chamou')
    return this.http.get(url)
    
  }
}
