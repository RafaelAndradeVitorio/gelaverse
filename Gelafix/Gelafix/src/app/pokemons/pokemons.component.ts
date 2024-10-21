import { Component, inject, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { error } from 'console';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit{
  ngOnInit(): void {
    this.loadPokemons()
  }

  private pokemomService = inject(PokemonsService)
  pokemons:any = []

  loadPokemons(){
    this.pokemomService.getPokemons().subscribe({
      next : (pokemons : any) => {
        this.pokemons = pokemons,
        console.log(pokemons)
      },
      error: (error) => {console.log('deu erro aqui ó:' + error)}
    })
  }
}
