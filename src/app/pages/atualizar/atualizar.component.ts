import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';
import { NotificacaoService } from 'src/app/services/notificacao/notificacao.service';

export interface DialogData {
  nome: string;
  id: number;
  cpf: string;
  email: string;
  telefone: string;
  sexo: string;
  dataNascimento: string;
}

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})


export class AtualizarComponent implements OnInit {
  constructor(
    private crud: CrudService,
    private notificacao: NotificacaoService,
    @Inject(MAT_DIALOG_DATA) public dadosDialog: DialogData,
    public dialogRef: MatDialogRef<AtualizarComponent>
    ) {
  }

  ngOnInit(): void {
    var dia  = this.dadosDialog.dataNascimento.split("/")[0];
    var mes  = this.dadosDialog.dataNascimento.split("/")[1];
    var ano  = this.dadosDialog.dataNascimento.split("/")[2];

    this.dadosDialog.dataNascimento = ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);

  }

  atualizar(){
    this.crud.atualizar(this.dadosDialog).subscribe(response =>{
      this.notificacao.sucesso('ATUALIZAÇÃO FEITA COM SUCESSO', 'SUCESSO')
      setTimeout(() =>{
        location.reload()
      },2000)
    }, error=>{
      this.notificacao.erro(error.statusText,'ERRO')
    })
  }


}
