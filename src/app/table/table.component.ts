import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { HistoricalService } from '../core/services/historical/historical.service';
import { map, Observable } from 'rxjs';
import { Historical } from '../core/models/historical.model';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  @Output() sendData = new EventEmitter<Historical>();
  @Input() symbol: string = '';

  historicalData$ !: Observable<Historical>
  constructor(private historicalService: HistoricalService) { }
  ngOnInit(): void {
    //this.historicalData$ = this.historicalService.getHistorical()
  }
  ngOnChanges(changes: SimpleChanges) {
    const newValue = changes['symbol'].currentValue
    this.getHistoricalBySymbol(newValue)
  }
  getHistoricalBySymbol(symbol: string) {
    this.historicalData$ = this.historicalService.getHistoricalBySymbol(symbol)
    this.historicalData$.subscribe((data) => {
      //console.log("hayyyy", data);
      this.sendData.emit(data)
    })

  }

}
