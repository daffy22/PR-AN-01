import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Gif, GifsReponse } from '../interfaces/gifResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _baseUrl: string = environment.baseUrl;
  private _apiKey: string = environment.apiKey;
  private _gifs: Gif[] = [];
  private _history: string[] = [];

  get getGifs() {
    return [...this._gifs];
  }

  get getHistory() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history') || '[]');
  }

  cleanHistory() {
    this._history = [];
  }

  search(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (query.length <= 0 ) return;

    if (!this.getHistory.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history))
    }

    const params = new HttpParams()
            .set('api_key', this._apiKey)
            .set('limit', 6)
            .set('q', query);

    return this.http.get<GifsReponse>(`${ this._baseUrl }/search`, { params: params })
      .subscribe( resp => {
        this._gifs = resp.data;
      });
  }

}
