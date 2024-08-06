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
  pessoa = {
    foto: 'https://i.pinimg.com/564x/5e/db/4f/5edb4f898cdbc44941326e598ac0c314.jpg',
    nome: 'clara',
    objetivo: 'programador',
    contato: {
      email: 'mcaclara07@gmail.com',
      telefone: '(15) 99145-6913',
      github: 'github.com/yclarinete',
      linkedin: 'linkedin.com/yclarinete'
    },

    softskills: [
      'comunicação',
      'proatividade',
      'trabalho em grupo'
    ],

    formacao: [
      {
        ano_inicio: '2022',
        ano_fim: '2024',
        instituicao: 'etec sales gomes',
        curso: 'técnico desenvolvimento de sistemas'
      },

      {
        ano_inicio: '2025',
        ano_fim: '2027',
        instituicao: 'fatec wilson roberto',
        curso: 'superior em análise e desenvolvimento de sistemas'
      }
    ],

    projeto: [
      {
        ano: '2023',
        instituicao: 'etec sales gomes',
        nome_projeto: 'etec de portas abertas',
        descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quas repellendus ducimus voluptatum omnis soluta ipsa itaque ipsum doloribus voluptas dolore labore tempore rerum quisquam at excepturi autem, amet totam!'
      }
    ]
  }
  constructor(){ }
}
