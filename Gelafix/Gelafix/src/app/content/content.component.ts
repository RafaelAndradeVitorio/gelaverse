import { Component } from '@angular/core';
import { MovieComponent } from "../movie/movie.component";
import { PostComponent } from "../post/post.component";
import { PokemonsComponent } from "../pokemons/pokemons.component";
import { CambioComponent } from "../cambio/cambio.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MovieComponent, PostComponent, PokemonsComponent, CambioComponent, AboutMeComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
