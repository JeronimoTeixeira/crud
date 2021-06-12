import { Component, OnInit } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { AtualizarComponent } from '../atualizar/atualizar.component';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';
import { NotificacaoService } from 'src/app/services/notificacao/notificacao.service';

export interface PeriodicElement {
  nome: string;
  id: number;
  cpf: string;
  email: string;
  telefone: string;
  sexo: string;
  dataNascimento: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'sexo', 'dataNascimento', 'acoes'];
  dataSource: PeriodicElement[] = []
  constructor(public dialog: MatDialog,
    private crud: CrudService,
    private notificacao: NotificacaoService,) {}

  ngOnInit(): void {
    this.crud.consulta().subscribe(response => {
      this.dataSource = response
      console.log(this.dataSource)
    })
    // this.dataSource = [
    //   {id: 1, nome: 'Teste', cpf:'31832045846', email:'geteixeira095@gmail.com', telefone:'85991787430', sexo:'F', dataNascimento:'24/07/1999'}
    // ];

  }

  abrirDialogCadastro() {
    const dialogRef = this.dialog.open(CadastroComponent);
  }

  abrirDialogAtualizar(element: PeriodicElement) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = element;
    const dialogRef = this.dialog.open(AtualizarComponent, dialogConfig);
  }

  delete(id:Number){
    this.crud.deletar({'id':id}).subscribe(response =>{
      this.notificacao.sucesso('REMOÇÃO FEITA COM SUCESSO', 'SUCESSO')
      setTimeout(() =>{
        location.reload()
      },2000)
    }, error =>{
      this.notificacao.erro(error.statusText, 'ERRO')
    });
  }
}
