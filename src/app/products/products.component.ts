import { Component,OnInit,OnDestroy} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {

  data:any;
  mysubscription:Subscription;
  
  constructor(private router:Router,private dsObj:DataService) { }
  onSelect(id)
  {
    this.router.navigateByUrl('products/'+id)
  }

  ngOnInit(): void {

    this.mysubscription=this.dsObj.getFoodData().subscribe(
      res=>{
        this.data=res
        console.log(this.data)
      },
      err=>{
        console.log(err)
      }
    )
  }
  ngOnDestroy(){
    this.mysubscription.unsubscribe();
  }

}
