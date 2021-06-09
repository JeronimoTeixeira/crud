import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  inserir(obj: any){
    return this.http.post<any>(`${environment.api}/cadastro`,obj);
  }

  consulta(){
    return this.http.get<any>(`${environment.api}/consulta`);
  }

  deletar(obj: any){
    return this.http.post<any>(`${environment.api}/deletar`,obj);
  }

  atualizar(obj: any){
    return this.http.put<any>(`${environment.api}/atualizar`,obj);
  }

}
