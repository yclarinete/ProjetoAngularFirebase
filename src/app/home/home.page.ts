import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  recado = {
    assunto: null,
    mensagem: null
  }

  recados: any = [];

  constructor(
    public crudService: CrudService
  ){}

  enviar(){
    this.crudService.insert(this.recado, 'recados');
  }

  carregar(){
    this.crudService.fetchAll('recados')
    .then((response) => {
      console.log(response);
      this.recados = response;
    })

    this.crudService.fetchAll('recados')
    .catch((erro) => {
      console.log(erro);
    })

    this.crudService.fetchAll('recados')
    .finally(() => {
      console.log('processo finalizado!');
    })
  }
  
}