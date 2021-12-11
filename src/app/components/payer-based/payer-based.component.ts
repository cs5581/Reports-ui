import { ReportsService } from 'src/app/services/recon-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-payer-based',
  templateUrl: './payer-based.component.html',
  styleUrls: ['./payer-based.component.css']
})
export class PayerBasedComponent implements OnInit {
  showImage!: boolean;
  payer: any;

  columnsToDisplay = ['Patient-Name', 'Patient-ID', 'Amount-Collected', 'Amount-Owed', 'Insurance']
  
  @ViewChild(MatPaginator) paginator!: MatPaginator


  constructor(private payerService: ReportsService) {
    this.showImage = false;
    this.payerService.getPayerBased().subscribe( x => {
      this.payer = new MatTableDataSource<any>(x);
      this.payer.paginator = this.paginator;
    })
  }
  ngOnInit(): void {
    
  }
}
