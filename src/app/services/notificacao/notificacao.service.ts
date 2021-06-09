import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private toastr: ToastrService) { }

  sucesso(message: string | undefined, title: string | undefined){
      this.toastr.success(message, title)
  }

  erro(message: string | undefined, title: string | undefined){
      this.toastr.error(message, title)
  }
}
