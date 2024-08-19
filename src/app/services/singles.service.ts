import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Single } from '../models/singles.model';

@Injectable({
  providedIn: 'root',
})
export class SinglesService {
  private url = 'http://localhost:3000/singles';
  constructor(private http: HttpClient) {}

  get(): Observable<Single[]> {
    return this.http.get<Single[]>(this.url);
  }

  getById(id: number): Observable<Single> {
    return this.http.get<Single>(`${this.url}/${id}`);
  }

  add(param: Single): Observable<any> {
    return this.http.post<any>(this.url, param);
  }

  delete(id:string): void {
    this.http.delete(`${this.url}/${id}`)
  }
}
