import { Component, OnInit, ViewChild } from '@angular/core';
import { AttractionService } from '../../services/attraction.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-attraction-details',
  templateUrl: './attraction-details.component.html',
  styleUrls: ['./attraction-details.component.css']
})

export class AttractionDetailsComponent implements OnInit {

  attraction: any;

  displayedColumns = ['#', 'title', 'placeName', 'placeAddress', 'description', 'website', 'contact', 'email', 'active'];
  dataSource = new MatTableDataSource(this.attraction);


  @ViewChild(MatPaginator) paginator : MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private _attractionService: AttractionService,
              private _router: Router) { }

  ngOnInit() {
    this._attractionService.getAllAttraction()
    .subscribe((data) => {
      this.attraction = data;
      console.log('####Attraction List', this.attraction);
      this.dataSource = new MatTableDataSource(this.attraction);
    });
  }

  deleteAttraction(id) {
    this._attractionService.delete(id)
    .subscribe((data) => {
      this._router.navigate(['/attraction-details']);
    }, (err) => {
      console.log(err);
    });
  }
}
