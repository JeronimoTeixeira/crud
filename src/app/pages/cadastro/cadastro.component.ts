import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
import { NotificacaoService } from 'src/app/services/notificacao/notificacao.service';
// import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public dados = {
    nome: '',
    email: '',
    cpf:'',
    telefone: '',
    sexo: '',
    dataNascimento: '',
  }
  constructor(
    private crud: CrudService,
    private notificacao: NotificacaoService
    ) {
  }

  ngOnInit(): void {
  }

  inserir(){
    // var dia  = this.dados.dataNascimento.split("/")[0];
    // var mes  = this.dados.dataNascimento.split("/")[1];
    // var ano  = this.dados.dataNascimento.split("/")[2];

    // this.dados.dataNascimento = ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);

    this.crud.inserir(this.dados).subscribe(response =>{
      this.notificacao.sucesso('CADASTRO FEITA COM SUCESSO', 'SUCESSO')
    }, error=>{
      this.notificacao.erro(error.statusText,'ERRO')
    })
  }

}

