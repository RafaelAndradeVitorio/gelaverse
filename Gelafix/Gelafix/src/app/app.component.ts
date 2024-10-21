
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { CommonModule } from '@angular/common';
import { MovieComponent } from "./movie/movie.component";
import { PokemonsComponent } from "./pokemons/pokemons.component";
import { CambioComponent } from "./cambio/cambio.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent, CommonModule, MovieComponent, PokemonsComponent, CambioComponent, NavbarComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gelafix';
}
