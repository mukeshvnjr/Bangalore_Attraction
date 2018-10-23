import { Component, OnInit } from '@angular/core';
import { AttractionService } from '../../services/attraction.service';
import {HttpClient} from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-attraction-list-page',
  templateUrl: './attraction-list-page.component.html',
  styleUrls: ['./attraction-list-page.component.css']
})

export class AttractionListPageComponent implements OnInit {

  attractions: {};

  constructor(private _attractionService: AttractionService, private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('http://192.168.0.177:3000/attraction/getAllAttraction')
      .subscribe((data) => {
        this.attractions = data;
        console.log('=======', this.attractions);
      });
  }
}



