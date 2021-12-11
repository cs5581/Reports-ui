import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  @Input() name_of_report!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
