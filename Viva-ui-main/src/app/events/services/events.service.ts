import { Injectable } from '@angular/core';
import { Event } from '../events/model/event';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private readonly API = 'api/events';

  constructor(private httpClient: HttpClient ) {}

  list() {
    return this.httpClient.get<Event[]>(this.API)
    .pipe(
      first(),
      delay(2000),
      tap(events => console.log(events))
    );
  }
}
