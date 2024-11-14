import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Historical, HistoricalEntry } from '../core/models/historical.model';
import { ChartConfiguration, ChartType } from 'chart.js';
import { HighchartsChartModule } from 'highcharts-angular';
import Highcharts from 'highcharts';
@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.css'
})
export class GraphicsComponent implements OnInit {
  @Input() symbol: string = '';
  @Input() historical: Historical = { symbol: '', historical: [] }
  dates = []
  closesValues = []
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  chartOptions!: Highcharts.Options;
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges) {
    const { symbol, historical }: Historical = this.historical
    //console.log('aa', historical);
    const dates = historical.map(entry => entry.date)
    console.log(dates);
    const closesValues = historical.map(entry => entry.close)

    this.chartOptions = {
      title: {
        text: 'Indicadores',
      },
      xAxis: {
        categories: dates,
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: 'Close Price'
        }
      },
      series: [{
        name: symbol,
        type: 'line',
        data: closesValues,

      },
      ],
    }


    //console.log('historical', this.historical);
  }

}
