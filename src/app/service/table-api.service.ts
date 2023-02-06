import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableApiService {

  constructor(
    public http: HttpClient
  ) { }

  url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story'

  fetchData() {
    return this.http.get(this.url)
  }

}
