import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attraction-edit',
  templateUrl: './attraction-edit.component.html',
  styleUrls: ['./attraction-edit.component.css']
})
export class AttractionEditComponent implements OnInit {

  attractions = {};
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getAttractionById(this.route.snapshot.params['id']);
  }

  getAttractionById(id) {
    this.httpClient.get('http://192.168.0.177:3000/attraction/' + id)
    .subscribe(data => {
      this.attractions = data;
      console.log('============', this.attractions);
    });
  }

  updateAttraction(id, data) {
    this.httpClient.put('http://192.168.0.177:3000/attraction/' + id, data)
      .subscribe(res => {
          // let id = res['_id'];
          this.router.navigate(['/attraction-details']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
