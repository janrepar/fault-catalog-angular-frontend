import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fault } from '../models/fault';
import { SuccessCriterion } from '../models/success-criterion';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private path = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  createFault(fault: Fault) : Observable<any> {
    return this.httpClient.post(this.path + "faultsuccesscriterion", fault);
  }

  getFaults(): Observable<Fault[]> {
    return this.httpClient.get<Fault[]>(this.path + "fault");
  }

  getSuccessCriteria(): Observable<SuccessCriterion[]> {
    return this.httpClient.get<SuccessCriterion[]>(this.path + "successcriterion");
  }

  getSuccessCriterion(id: string): Observable<SuccessCriterion> {
    return this.httpClient.get<SuccessCriterion>(this.path + `successcriterion/${id}`)
  }
}
