import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fault } from '../models/fault';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private path = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getFaults(): Observable<Fault[]> {
    return this.httpClient.get<Fault[]>(this.path + "fault");
  }
}
