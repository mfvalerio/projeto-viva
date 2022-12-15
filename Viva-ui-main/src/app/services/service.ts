import { Injectable } from '@angular/core';
import { Event } from '../events/events/model/event';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private readonly APIURL = environment.apiAddress;
  private readonly ENDPOINTS = {
    events: '/api/events',
    login: '/login',
    signup: '/signup',
  }

  constructor(private httpClient: HttpClient) {

  }

  list(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.APIURL + this.ENDPOINTS.events);
  }

  login(login: string, password: string): Observable<any> {
    var basic = `Basic ${window.btoa(login + ':' + password)}`;

    return this.httpClient.post<any>(this.APIURL + this.ENDPOINTS.login, basic)
      .pipe(
        map((response: any) => {
          localStorage.setItem('Authorization', response.token);
        })
      )
  }

  signup(login: string, password: string): Observable<any> {
    var basic = `Basic ${window.btoa(login + ':' + password)}`;

    return this.httpClient.post<any>(this.APIURL + this.ENDPOINTS.signup, basic)
      .pipe(
        map((response: any) => {
          //fazer algo aqui?
        })
      )
  }

}
