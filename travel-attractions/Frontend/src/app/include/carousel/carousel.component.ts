import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slider: {};

  constructor( private carousel: CarouselService) { }

  ngOnInit() {
    this.carousel.slider()
      .subscribe((data) => {
        this.slider = data;
        console.log('=====', this.slider);
      });
  }
}
