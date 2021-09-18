import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FtnapiService {

  constructor(private _http:HttpClient) { }

  //Top Tech News API URL
  topHeadlineNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=44aeb15c48b549c89b5f32b64361cc9b';

  ftnheadlines():Observable<any>{
    return this._http.get(this.topHeadlineNews)
  }
}
