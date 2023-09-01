import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { ListComponentModel } from 'src/app/common/model';
import { listComponents } from 'src/app/common/listComponents';
import { DragAndDropModule } from '@progress/kendo-angular-utils';

@Component({
  selector: 'app-list-comp',
  standalone: true,
  imports: [CommonModule,ListViewModule,DragAndDropModule],
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ListCompComponent implements OnInit {
  listComponent!: ListComponentModel[];
  constructor() { }

  ngOnInit(): void {
    this.listComponent = listComponents
  }


  onDragStart(ev:DragEvent,data:ListComponentModel){
    console.log('drag',data)
    ev.dataTransfer?.setData("transferData",JSON.stringify(data))
    // ev.stopPropagation();
  }

  allowDropComponent(ev:DragEvent){

  }

}
