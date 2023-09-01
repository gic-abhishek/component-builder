import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule, TileLayoutReorderEvent, TileLayoutResizeEvent } from '@progress/kendo-angular-layout';
import { DropTargetEvent } from '@progress/kendo-angular-utils';
import { TableComponent } from '../all-components/table/table.component';

@Component({
  selector: 'app-designer',
  standalone: true,
  imports: [CommonModule,LayoutModule,IconsModule,ButtonsModule,TableComponent],
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listComponents:any[]=[]
  public events: string[] = [];

  public onReorder(e: TileLayoutReorderEvent): void {
      this.log(e, 'reorder');
  }

  public onResize(e: TileLayoutResizeEvent): void {
      this.log(e, 'resize');
  }

  private log(event: any, eventName: string): void {
      // Check the developer tools console to inspect the full available event data
      console.log(eventName, event);

      delete event.items;
      delete event.item;
      this.events.unshift(`${eventName}: ${JSON.stringify(event)}`);
  }

  public handleDrop(ev: DropTargetEvent): void {
    // console.log(`drop: ${JSON.stringify(ev.dragEvent)}`);
  }

  dropComponent(ev:DragEvent){
    console.log('drop')
    let transferData:any =   ev.dataTransfer?.getData("transferData")
    // console.log(JSON.parse(transferData))
    // console.log(JSON.parse(transferData))
    this.listComponents.push(JSON.parse(transferData));
    // console.log(this.listComponents)
    ev.stopPropagation();
  }

  allowDragOverComponent(ev:DragEvent){
    ev.preventDefault();

  }


}
