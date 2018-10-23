import { Component, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import { OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent } from 'angular-star-rating/src/star-rating-struct';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StarRatingComponent {

  onClickResult: OnClickEvent;
  onHoverRatingChangeResult: OnHoverRatingChangeEvent;
  onRatingChangeResult: OnRatingChangeEven;

  onClick = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
  }

  onRatingChange = ($event: OnRatingChangeEven) => {
    console.log('onRatingUpdated $event: ', $event);
    this.onRatingChangeResult = $event;
  }

  onHoverRatingChange = ($event: OnHoverRatingChangeEvent) => {
    console.log('onHoverRatingChange $event: ', $event);
    this.onHoverRatingChangeResult = $event;
  }
}

