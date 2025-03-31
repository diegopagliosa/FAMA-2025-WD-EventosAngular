import { Component } from '@angular/core';
import { Evento, EventoServiceService } from '../../services/evento-service.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inclui-evento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inclui-evento.component.html',
  styleUrl: './inclui-evento.component.css'
})
export class IncluiEventoComponent {

  evento!: Evento;
  erro: boolean = false;
  msgErro: string = '';
  constructor(private service: EventoServiceService, private router: Router) {
    this.evento = {
      id_evento: 0, nome: '',
      descricao: '', endereco: '', data_evento: new Date(), max_vagas: 0
    }
  }
  enviarEvento() {
    this.erro = false;
    this.msgErro = '';
    /*
    this.service.addEvento(this.evento).subscribe(
      (response) => {
        console.log('Evento enviado com sucesso!', response);
        this.router.navigate(['/eventos']);
      },
      (error) => {
        this.erro = true;
        let ret = error.error;
        this.msgErro = ret.erro;
        console.error('Erro ao enviar evento!' + ret.erro, error);
      }
    );*/
  }

}
