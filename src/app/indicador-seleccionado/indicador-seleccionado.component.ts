import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MindicadorService } from '../services/mindicador-service.service';
import { switchMap, tap } from 'rxjs/operators';
import { TitleService } from '../services/title-service.service';


@Component({
  selector: 'app-indicador-seleccionado',
  templateUrl: './indicador-seleccionado.component.html',
  styleUrls: ['./indicador-seleccionado.component.sass']
})

export class IndicadorSeleccionadoComponent implements OnInit {

  data: Observable<any>

  keys: string[]=[]

  constructor(private mindicador:MindicadorService, public route:ActivatedRoute, public titleservice: TitleService) {
    this.data = route.params.pipe(
      switchMap(params=>{
        return this.mindicador.getTipoIndicadorEconomico(params['id']);
      }),
      tap(indicador => titleservice.setTitle(indicador['nombre']))
    );
  }

  ngOnInit(): void {
  }
  

}