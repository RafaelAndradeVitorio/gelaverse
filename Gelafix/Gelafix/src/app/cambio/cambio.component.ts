import { Component, inject, OnInit } from '@angular/core';
import { CambioService } from '../services/cambio.service';
import { error } from 'console';

@Component({
  selector: 'app-cambio',
  standalone: true,
  imports: [],
  templateUrl: './cambio.component.html',
  styleUrl: './cambio.component.scss'
})
export class CambioComponent implements OnInit{
  ngOnInit(): void {
    this.loadCambio() 
  }

  private cambioService = inject(CambioService)
  cambios: any = []
  loadCambio(){
    this.cambioService.getCambio().subscribe({
      next : (cambio : any) => {
        this.cambios = cambio,
        console.log(cambio)
      },
      error : (error) => console.log('deu erro' + error)
    })
  }
}
