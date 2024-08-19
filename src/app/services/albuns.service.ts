import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/albuns.model';

@Injectable({
  providedIn: 'root',
})
export class AlbunsService {
  private url = 'http://localhost:3000/albuns';
  constructor(private http: HttpClient) {}

  get(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
  }

  getById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.url}/${id}`);
  }

  add(param: Album): Observable<any> {
    return this.http.post<any>(this.url, param);
  }

  delete(id: string): void {
    this.http.delete(`${this.url}/${id}`);
  }

  // addMusic(albumName:String, music: Music): Observable<any> {
  //   this.http.put(this.url)

  // }
}
