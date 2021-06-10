import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details;

  constructor(private ar:ActivatedRoute,private ds:DataService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.ds.getFoodDataId(id).subscribe(
      obj=>{
        console.log("obj is ",obj);
        this.details=obj;0
      },
      err=>{
        console.log("err in reading post",err);
      }
    )
    }
    
  }