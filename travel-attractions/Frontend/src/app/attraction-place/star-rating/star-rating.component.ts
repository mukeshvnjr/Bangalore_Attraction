import { Component, OnInit, ViewEncapsulation} from '@angular/core';
// @ts-ignore
import { OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent } from 'angular-star-rating/src/star-rating-struct';

class StarRating {
}

@Component({
  selector: 'app-star-rating',
  inputs: [
    'getHalfStarVisible',
    'getColor',
    'showHalfStars',
    'hoverEnabled',
    'rating',
    'step',
    'disabled',
    'readOnly',
    'space',
    'starType',
    'size',
    'speed',
    'numOfStars',
    'direction',
    'staticColor',
    'labelPosition',
    'labelText',
    'id'
  ],
  outputs: ['starClickChange', 'ratingChange', 'hoverRatingChange'],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent extends StarRating {

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
