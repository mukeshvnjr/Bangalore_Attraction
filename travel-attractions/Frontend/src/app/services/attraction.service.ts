import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import "rxjs/Rx";

@Injectable()

export class AttractionService {

  constructor( private httpClient: HttpClient) { }

  attractionDetails(body: any) {
      return this.httpClient.post('http://192.168.0.177:3000/attraction/attractionInsert', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getAllAttraction() {
    return this.httpClient.get('http://192.168.0.177:3000/attraction/getAllAttraction/', {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    })
    .map((response: Response) => response);
  }

  delete(id) {
    return this.httpClient.delete('http://192.168.0.177:3000/attraction/' + id, {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  comments(body: any) {
    return this.httpClient.post('http://192.168.0.177:3000/review/userComments', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
