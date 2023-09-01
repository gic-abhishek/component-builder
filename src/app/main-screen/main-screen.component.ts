import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCompComponent } from './list-comp/list-comp.component';
import { DesignerComponent } from './designer/designer.component';
import { EditorComponent } from './editor/editor.component';



@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [CommonModule,ListCompComponent,DesignerComponent,EditorComponent],
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 

}
