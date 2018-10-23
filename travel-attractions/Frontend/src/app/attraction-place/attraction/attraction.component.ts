import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.css']
})
export class AttractionComponent implements OnInit {
    
    lat: number = 12.8003;
  lng: number = 77.5770;

  attractions = {};  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAttractionById(this.route.snapshot.params['id']);
  }

  getAttractionById(id){
    this.http.get('http://192.168.253.1:3000/attraction/'+id)
    .subscribe(data =>{
      this.attractions= data;
      console.log("============+++++++++++", this.attractions);
    });
  }

}
