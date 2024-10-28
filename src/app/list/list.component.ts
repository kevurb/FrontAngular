import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SymbolsService } from '../core/services/symbols/symbols.service';
import { Observable } from 'rxjs';
import { Symbol } from '../core/models/symbol.model';
@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  @Output() symbolSelect = new EventEmitter<string>();
  symbols$ !: Observable<Symbol[]>
  // singleSymbol$ !: Observable<Symbol>
 constructor(private symbolsService: SymbolsService) {}

 ngOnInit(): void {
   this.symbols$= this.symbolsService.getSymbols()
 }

 getPricesBySymbol(symbol:string){
  // this.singleSymbol$ = this.symbolsService.getSybolsBySymbol(symbol)
  this.symbolSelect.emit(symbol);
 }


}
