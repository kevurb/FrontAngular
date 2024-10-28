import { Component, OnInit } from '@angular/core';
import { ListComponent } from "./list/list.component";
import { CommonModule } from '@angular/common';
import { TableComponent } from "./table/table.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { Historical } from './core/models/historical.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListComponent, CommonModule, TableComponent, GraphicsComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GsgInterfaz';
  symbol:string = '';
  historical : Historical= { symbol: '', historical: []} ;

  setSymbol($event:string){
    this.symbol = $event;
    //console.log({ symbol: this.symbol})
    // console.log("setsymbol",this.symbol);

  }
  setData ($event:Historical){
    this.historical= $event;
    //console.log({historical: this.historical});


  }



}
