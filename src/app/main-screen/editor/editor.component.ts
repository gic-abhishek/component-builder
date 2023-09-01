import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';


@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule,DialogsModule,LayoutModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
