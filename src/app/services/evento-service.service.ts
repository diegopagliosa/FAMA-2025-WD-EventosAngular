import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  private url = "http://localhost:8000";
  constructor(private http: HttpClient) { }
  //http://localhost:8000/eventos
  getEventos(): Observable<Evento[]> {
    var metodo = "/eventos";
    return this.http.get<Evento[]>(this.url + metodo);
  }
  getEvento(id_evento: number): Observable<Evento> {
    var metodo = "/eventos?id_evento=" + id_evento;
    return this.http.get<Evento>(this.url + metodo);
  }

}

export interface Evento {
  id_evento: number;
  nome: string;
  data_evento: Date;
  endereco: string;
  descricao: string;
  max_vagas: number;
}
