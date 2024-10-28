
export interface HistoricalEntry {
  date: string;
  close: number;
}

export interface Historical {
  symbol: string;              // Símbolo como string
  historical: HistoricalEntry[]; // Arreglo de datos históricos
}
