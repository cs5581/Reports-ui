import { ReportsService } from './../../services/recon-service.service';
import { RevenueAging } from './../../SheetTypeInterface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-revenue-aging',
  templateUrl: './revenue-aging.component.html',
  styleUrls: ['./revenue-aging.component.css']
})
export class RevenueAgingComponent implements OnInit {
  #title ='mouse-hover';
  showImage!: boolean;
  revenue: any;

  columnsToDisplay = ['Patient-Name', 'Patient-ID', 'Amount-Owed', 'Amount-Due-Date']
  
  @ViewChild(MatPaginator) paginator!: MatPaginator


  constructor(private revenueService: ReportsService) {
    this.showImage = false;
    this.revenueService.getRevenueAging().subscribe( x => {
      this.revenue = new MatTableDataSource<any>(x);
      this.revenue.paginator = this.paginator;
    })
  }
  ngOnInit(): void {
    
  }

}
