import { ReportsService } from 'src/app/services/recon-service.service';
import { VisitingList } from './../../SheetTypeInterface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-visiting-list',
  templateUrl: './visiting-list.component.html',
  styleUrls: ['./visiting-list.component.css']
})
export class VisitingListComponent implements OnInit {
  showImage!: boolean;
  visiting: any;
  columnsToDisplay = ['Patient-Name', 'Patient-ID', 'Date-of-Appointment', 'Time-of-Appointment', 'Notes', 'Medications']
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private visitingService: ReportsService) {
    this.showImage = false;
    this.visitingService.getVisitingList().subscribe( x => {
      this.visiting = new MatTableDataSource<any>(x);
      this.visiting.paginator = this.paginator;
    })
  }
  ngOnInit(): void {
    
  }

  
}
