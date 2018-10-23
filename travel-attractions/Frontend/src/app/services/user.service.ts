import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _http: HttpClient) { }

  registerUser(body: any) {
    return this._http.post('http://192.168.0.177:3000/user/registerUser', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any) {
    return this._http.post('http://192.168.0.177:3000/user/loginUser', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  user() {
    return this._http.get('http://192.168.0.177:3000/user/getAllUserData', {
      observe: 'body',
      withCredentials: true, /*withCredentials this function cookie will be available in browser*/
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  logout() {
    return this._http.get('http://192.168.0.177:3000/user/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
}
