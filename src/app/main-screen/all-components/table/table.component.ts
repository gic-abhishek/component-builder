import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,GridModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() getTableData: any
  gridData: any;
  constructor() { }

  ngOnInit(): void {
    this.gridData = this.getTableData
    console.log(this.gridData)
  }

  // public tableData: any[] = [
  //   {
  //     ProductID: 1,
  //     ProductName: "Chai",
  //     UnitPrice: 18,
  //     Category: {
  //       CategoryID: 1,
  //       CategoryName: "Beverages",
  //     },
  //   },
  //   {
  //     ProductID: 2,
  //     ProductName: "Chang",
  //     UnitPrice: 19,
  //     Category: {
  //       CategoryID: 1,
  //       CategoryName: "Beverages",
  //     },
  //   }]

}
