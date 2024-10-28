import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historical } from '../../models/historical.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {
  private readonly URL= 'http://localhost:3000/api/historical'
  constructor(private http:HttpClient) { }

  getHistorical():Observable<Historical>{
    // this.http.get(this.URL).subscribe((res:any)=>{
    //   console.log(res);

    // })
   // console.log("peticion a esta URL",this.URL);
    return this.http.get<Historical>(this.URL)
  }
  getHistoricalBySymbol(symbol:string):Observable<Historical>{
    //console.log(`${this.URL}/${symbol}`);
    return this.http.get<Historical>(`${this.URL}/${symbol}`);
  }
}
