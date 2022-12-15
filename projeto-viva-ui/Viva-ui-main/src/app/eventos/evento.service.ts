import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Evento } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  eventosUrl = 'http://localhost:8080/events';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  adicionar(evento: Evento): Promise<Evento> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.eventosUrl,
      Evento.toJson(evento), { headers })
      .toPromise();
  }

  excluir(id: number): Promise<any> {
    return this.http.delete(`${this.eventosUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(evento: Evento): Promise<Evento> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Evento>(`${this.eventosUrl}/${evento.id}`, Evento.toJson(evento), { headers })
      .toPromise()
      .then((response: any) => {
        const eventoAlterado = response;

        this.converterStringsParaDatas([eventoAlterado]);

        return eventoAlterado;
      });
  }

  buscarPorCodigo(id: number): Promise<Evento> {
    return this.http.get<Evento>(`${this.eventosUrl}/${id}`)
      .toPromise()
      .then((response: any) => {
        const lancamento = response;

        this.converterStringsParaDatas([lancamento]);

        return lancamento;
      });
  }

  private converterStringsParaDatas(eventos: Evento[]): void {
    for (const evento of eventos) {
      evento.date = moment(evento.date,
        'DD/MM/YYYY').toDate();
    }
  }

}
