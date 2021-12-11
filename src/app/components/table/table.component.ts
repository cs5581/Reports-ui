import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ReportsService } from 'src/app/services/recon-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  showImage!: boolean;
  reconsheet: any;
  
  columnsToDisplay = ['Patient-Name', 'Patient-ID','Doctor-ID', 'Speciality-Seen','Date-of-Birth', 'Date-of-Appointment', 'Time-of-Appointment', 'Appointment-Status', 'CoPay', 'Payment-Amount', 'Amount-Collected']

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private reconService: ReportsService) {
    this.showImage = false;
    this.reconService.getRecon().subscribe( x => {
      this.reconsheet = new MatTableDataSource<any>(x);
      this.reconsheet.paginator = this.paginator;
    })
  }
  ngOnInit(): void {
    
  }
  

}
