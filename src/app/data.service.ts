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

    return this.hc.get<any>("https://yummly2.p.rapidapi.com/feeds/list-similarities",{
      "headers": {
        //"x-rapidapi-key": "c4b7d7f039mshb8d7469df86afe4p1115fbjsnecc9a48c66f3",
        //"x-rapidapi-host": "yummly2.p.rapidapi.com"
      }
    })
  }
}
