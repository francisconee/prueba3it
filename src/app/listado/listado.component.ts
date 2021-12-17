import { importType } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MindicadorService } from '../services/mindicador-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {

  data: any

  keys: string[]=[]
  

  constructor(private mindicador:MindicadorService, public route:ActivatedRoute, public router:Router) {
    
  }

  goIndicadorSeleccionado(id:string){
    this.router.navigate(['/indicadorseleccionado/',id],{ replaceUrl: true });
  }
  
  goDetalleIndicador(id:string){
    this.router.navigate(['/detalleindicador/',id],{ replaceUrl: true });
  }

  ngOnInit(): void {
    this.data = this.mindicador.getIndicadores().pipe(
    );
    this.keys = this.mindicador.getIndicadoresKeys();
  }

  getIndicadorNombre(indicadores:any,key:string):string{
    return indicadores[key]['nombre']
  }
  getIndicadorUnidadMedida(indicadores:any,key:string):string{
    return indicadores[key]['unidad_medida']
  }

}