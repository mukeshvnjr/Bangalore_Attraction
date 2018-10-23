import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AttractionService} from '../../services/attraction.service';


@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {

  lat = 12.8003;
  lng = 77.5770;

  attractions = {};
  constructor(private httpClient: HttpClient, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAttractionById(this.route.snapshot.params['id']);
  }

  getAttractionById(id) {
    this.httpClient.get('http://192.168.0.177:3000/attraction/' + id)
      .subscribe(data => {
        this.attractions = data;
        console.log('============+++++++++++', this.attractions);
      });
  }
}
