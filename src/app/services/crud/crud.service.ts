import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  inserir(obj: any){
    return this.http.post<any>(`api/pessoas`,obj);
  }

  consulta(){
    return this.http.get<any>(`/api/pessoas`);
  }

  deletar(obj: any){
    return this.http.delete<any>(`/api/pessoas/${obj.id}`,{});
  }

  atualizar(obj: any){
    return this.http.put<any>(`api/pessoas`,obj);
  }

}
