import { ReportsService } from './../../services/recon-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {NewPatient} from '../../SheetTypeInterface'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent implements OnInit {

  showImage = false;
  newpatient: any;

  columnsToDisplay = ['Patient-Name', 'Patient-ID', 'Speciality-Seen','Date-of-Birth', 'Date-of-Appointment', 'Time-of-Appointment', 'Appointment-Status', 'CoPay', 'Insurance', 'Registration-Date']
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private newpatientService: ReportsService) {
    this.showImage = false;
    this.newpatientService.getNewPatient().subscribe( x => {
      this.newpatient= new MatTableDataSource<any>(x);
      this.newpatient.paginator = this.paginator;
    })
  }
  ngOnInit(): void {
    
  }

  


}
