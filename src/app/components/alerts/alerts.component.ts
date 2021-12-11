import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Alerts } from './../../SheetTypeInterface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from './../../services/recon-service.service';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  showImage!: boolean;
  alerts: any;

  columnsToDisplay = ['Patient-Name', 'Patient-ID', 'Alert-Title', 'Alert-Description']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

  constructor(private alertService: ReportsService) {
    this.showImage = false;
    this.alertService.getAlerts().subscribe( x => {
      this.alerts = new MatTableDataSource<any>(x);
      this.alerts.paginator = this.paginator;
    })
    
    
  }
  ngOnInit(): void {

  
  }

  
}
