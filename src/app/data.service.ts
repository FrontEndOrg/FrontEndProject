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
        "x-rapidapi-key": "d688cbfaeamshfa00f42d1e663e5p120bb8jsn5e1672cfa110",
	"x-rapidapi-host": "yummly2.p.rapidapi.com"
	      //"useQueryString": true
      }
    })
  }
  getFoodDataId(id):Observable<any>{
    return this.hc.get<any>('http://localhost:4200/producsts/'+id)
  }
}
