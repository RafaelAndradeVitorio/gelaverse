import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ThisReceiver } from '@angular/compiler';
import { MovieDetail } from '../interfaces/movie-detail';
import { environment } from '../../environments/environment';
import { filter, map, take, tap } from 'rxjs';

const imgUrl = environment.imgUrl
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit{

  ngOnInit(): void {
    this.loadMovies()
    this.listGenre()
  }
  private movieService = inject(MovieService);
  // movies: any = [];
  movies: MovieDetail[] = []
  genres: any = []
  moviesFilter!: []
  
  loadMovies(){
    this.movieService.getMovies().subscribe({
      next : (res: any) => {
        this.movies = res.results as MovieDetail[];
        console.log(res.results)
      },
      error:(error)=> console.log("Erro pai", error)
    })
  }

  getFullImageUrl(posterPath: String): String{
    return imgUrl + posterPath
  }

  loadFilteredMovies(e: Event) {
    console.log('chamou')
    const id = (e.target as HTMLSelectElement).value;
    // const value = target.value 
    this.movieService.getMovies()
      .pipe(
        map((res: any) => res.results), // Pega os resultados
        map((movies: MovieDetail[]) => movies.filter(movie => movie.genre_ids.includes(Number(id)))) // Filtra filmes
      )
      .subscribe({
        next: (filteredMovies: MovieDetail[]) => {
          if(id === "All"){
            this.loadMovies()
          } else {
            this.movies = filteredMovies; // Atualiza a lista de filmes com apenas os 
          }
          console.log('Filmes', this.movies);
          console.log('id selecionado', id);
        },
        error: (error) => console.log("Erro pai", error)
      });
  }

  listGenre() {
    this.movieService.filterMoviesForGenre().subscribe({
      next : (res: any) => {
        this.genres = res.genres;
        // this.movies.genre_ids = this.genres
        console.log(this.genres)
      },
      error:(error)=> console.log("Erro pai", error)
    })
  }
  }

//   }
