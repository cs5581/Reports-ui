import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from './../../services/recon-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-missed-apps',
  templateUrl: './missed-apps.component.html',
  styleUrls: ['./missed-apps.component.css']
})
export class MissedAppsComponent implements OnInit {
  showImage!: boolean;
  missedapp: any;

  columnsToDisplay = ['Patient-Name', 'Patient-ID', 'Date-of-Appointment', 'Time-of-Appointment']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private missedappService: ReportsService) {
    this.showImage = false;
    this.missedappService.getMissedApps().subscribe( x => {
      this.missedapp= new MatTableDataSource<any>(x);
      this.missedapp.paginator = this.paginator;
    })
  }
  ngOnInit(): void {
    
  }

  

}


