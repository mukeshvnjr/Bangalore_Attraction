import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AttractionService} from '../../services/attraction.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {

  attractions: {};
  commentFormDetails: FormGroup;

  constructor(private router: Router, private attractionService: AttractionService,
              private httpClient: HttpClient, private route: ActivatedRoute,  private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getAttractionById(this.route.snapshot.params['id']);
    this.commentValidation();
  }

  commentValidation() {
    this.commentFormDetails = this.fb.group({
      review_id: [null, Validators.required ],
      rating: [null, Validators.required ],
      reviewTitle: [null, Validators.required ],
      reviewDescription: [null, Validators.required ],
      }
    );
  }

  getAttractionById(id) {
    this.httpClient.get('http://192.168.0.177:3000/attraction/' + id)
      .subscribe(data => {
        this.attractions = data;
        console.log('============', this.attractions);
      });
  }

  userComment() {
    if (!this.commentFormDetails.valid) {
      console.log('Invalid form');
      return;
    }
    this.attractionService.comments(this.commentFormDetails.value)
      .subscribe((data) => {
        this.attractions = data;
        console.log('+++++++++++', this.attractions);
        this.router.navigate(['/attractionlist']);
      });
  }
}

