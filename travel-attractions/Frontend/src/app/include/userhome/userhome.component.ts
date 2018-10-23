import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html'
})
export class UserhomeComponent implements OnInit {

  firstName: String = '';

  constructor(private _user: UserService, private _router: Router) { }

  addName(data) {
    this.firstName = data.firstName;
  }

  ngOnInit() {
    this._user.user()
      .subscribe((data) => {
        this.addName(data),
        error => this._router.navigate(['/login']);
      });
  }

  logout() {
    this._user.logout()
    .subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/login']);},
        error => console.error(error)
    );
  }
}
