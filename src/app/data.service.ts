import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  //to read all data
  getFoodData():Observable<any>{
    return this.hc.get<any>("https://yummly2.p.rapidapi.com/feeds/list",{
      "headers":{
        "x-rapidapi-key": "2450e6ecb9msh53bdd61f601289cp1f0530jsndcfdeab4e917",
	      "x-rapidapi-host": "yummly2.p.rapidapi.com"
	      //"useQueryString": true
      }
    })
  }
}
