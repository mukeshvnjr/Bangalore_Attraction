import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { AttractionService } from '../services/attraction.service';

export interface mResponse{
  success:string;
  message:string;
  result:attractionDetails[];

}
export interface attractionDetails{
  _id:string;
  title:string;
  description:string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  attraction;

  startAt = new Subject()
  endAt = new Subject()

  // attraction: any= {};
  filters: any= {title: '', description: ''};

  lastKeypress : number = 0;

  constructor(private _attractionService: AttractionService) { }

  ngOnInit() {
    this._attractionService.getAllAttraction()
      .subscribe(attraction=>{
        console.log(attraction)
        this.attraction = attraction
      })
  }

  search($event){
    if ($event.timeStamp - this.lastKeypress > 100){
      let q = $event.target.value
      this.startAt.next(q)
      this.endAt.next(q+"\uf8ff")
    }
   this.lastKeypress= $event.timeStamp
  }
}
