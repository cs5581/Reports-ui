import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from 'src/app/services/recon-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.css']
})
export class OverdueComponent implements OnInit {

  showImage!: boolean;
  overdue: any;

  columnsToDisplay = ['Patient-Name', 'Patient-ID', 'Amount-Owed']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private overdueService: ReportsService) {
    this.showImage = false;
    this.overdueService.getOverdueRecords().subscribe( x => {
      this.overdue= new MatTableDataSource<any>(x);
      this.overdue.paginator = this.paginator;
    })
  }
  ngOnInit(): void {
    
  }

}
