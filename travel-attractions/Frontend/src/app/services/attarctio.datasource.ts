import { DataSource } from "@angular/cdk/table";
import { CollectionViewer } from "@angular/cdk/collections";
import { Observable } from "rxjs";
import { Attraction } from "./attraction.interface";
import { AttractionService } from "./attraction.service";



export class AttractionDatasource implements DataSource<Attraction>{

  constructor(private _attractionService: AttractionService){}

  connect(CollectionViwer : CollectionViewer) : Observable<Attraction[]>{
    return undefined;
  }
  disconnect(CollectionViwer : CollectionViewer): void{

  }
}
