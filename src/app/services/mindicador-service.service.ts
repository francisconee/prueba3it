import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MindicadorService {

  constructor(private httpClient: HttpClient) { 

  }

  getIndicadores(): Observable<any>{
    return this.httpClient.get('https://mindicador.cl/api')
  }

  getTipoIndicadorEconomico(indicador:string): Observable<any>{
    return this.httpClient.get('https://mindicador.cl/api/'+indicador)
  }

  getIndicadoresKeys():string[]{
    return ['uf','ivp','dolar','dolar_intercambio','euro','ipc','utm','imacec','tpm','libra_cobre','tasa_desempleo','bitcoin']
  }
}

