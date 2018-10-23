import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private _http: HttpClient) { }

  slider() {
    return this._http.get('http://192.168.0.177:3000/slider/getSlider', {
      // headers: new HttpHeaders().append('Access-Control-Allow-Origin', '*')
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
}
