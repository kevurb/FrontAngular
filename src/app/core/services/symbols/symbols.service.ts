import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Symbol } from '../../models/symbol.model';

@Injectable({
  providedIn: 'root'
})
export class SymbolsService {
    private readonly URL= 'http://localhost:3000/api/symbols'

  constructor(private http:HttpClient) { }
  getSymbols(): Observable<Symbol[]> {
    return this.http.get<Symbol[]>(this.URL);
  }
  getSybolsBySymbol(symbol:string): Observable<Symbol>{
    return this.http.get<Symbol>(`${this.URL}/${symbol}`);
  }
}
