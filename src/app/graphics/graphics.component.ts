import { Component, Input, OnInit } from '@angular/core';
import { Historical, HistoricalEntry } from '../core/models/historical.model';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.css'
})
export class GraphicsComponent implements OnInit {
  @Input() historical !: Historical
  chartData= this.historical
ngOnInit(): void {

}

}
