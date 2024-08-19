import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participacao } from '../models/participacoes.model';

@Injectable({
  providedIn: 'root',
})
export class FeatsService {
  private url = 'http://localhost:3000/participacoes';
  constructor(private http: HttpClient) {}

  get(): Observable<Participacao[]> {
    return this.http.get<Participacao[]>(this.url);
  }

  getById(id: number): Observable<Participacao> {
    return this.http.get<Participacao>(`${this.url}/${id}`);
  }

  add(param: Participacao): Observable<any> {
    return this.http.post<any>(this.url, param);
  }
}
