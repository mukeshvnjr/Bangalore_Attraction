import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-curousel',
  templateUrl: './curousel.component.html',
  styleUrls: ['./curousel.component.css']
})
export class CurouselComponent implements OnInit {

  attractions = {};

  constructor( private carousel: CarouselService) { }

  ngOnInit() {
    this.carousel.slider()
    .subscribe((data) => {
      this.attractions = data;
      console.log('####Attraction List', this.attractions);
    });
  }
}
