import { Component} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  data:any;
  
  constructor(private dsObj:DataService) { }

  ngOnInit(): void {

    this.dsObj.getFoodData().subscribe(
      res=>{
        this.data=res
        console.log(this.data)
      },
      err=>{
        console.log(err)
      }
    )
  }
}
