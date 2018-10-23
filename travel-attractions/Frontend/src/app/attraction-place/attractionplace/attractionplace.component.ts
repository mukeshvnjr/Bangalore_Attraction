import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {AttractionService} from '../../services/attraction.service';



// @ts-ignore
@Component({
  selector: 'app-attractionplace',
  templateUrl: './attractionplace.component.html',
  styleUrls: ['./attractionplace.component.css']
})
export class AttractionplaceComponent implements OnInit {

  attractionFormDetails: FormGroup;

  validation_messages = {
    'title': [
      { type: 'required', message: 'Title name is required' }
    ],
    'placeName': [
      { type: 'required', message: 'Place Name is required' }
    ],
    'placeAddress': [
      { type: 'required', message: 'Address is required' }
    ],
    'shortDescription': [
      { type: 'required', message: 'Short Description is required' }
    ],
    'longDescription': [
      { type: 'required', message: 'Long Description is required' }
    ],
    'latitude': [
      { type: 'required', message: 'Latitude is required' }
    ],
    'longitude': [
      { type: 'required', message: 'Longitude is required' }
    ],
  };

  attraction: any;

  constructor(private router: Router,
    private attractionService: AttractionService, private fb: FormBuilder) {
   }
  ngOnInit() {
    this.attractionValidation();
  }

  attractionValidation() {
      this.attractionFormDetails = this.fb.group({
        title: [null, Validators.required ],
        placeName: [null, Validators.required ],
        placeAddress: [null, Validators.required ],
        shortDescription: [null, Validators.required ],
        longDescription: [null, Validators.required ],
        latitude: [null, Validators.required ],
        longitude: [null, Validators.required ],
        website: [null, Validators.required ],
        contact: [null, Validators.required ],
        email: [null, Validators.required ],
      }
    );
  }
  attractionPlace() {
    if (!this.attractionFormDetails.valid) {
      console.log('Invalid form');
      return;
    }
    this.attractionService.attractionDetails(this.attractionFormDetails.value)
      .subscribe((data) => {
       console.log(data);
       this.router.navigate(['/attraction-details']);
      });
    }
}
