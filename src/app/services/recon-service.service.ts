import { MissedAppointments, OverdueRecords, Alerts, VisitingList, PayerBased, RevenueAging, ReconSheet, PayerResponse } from './../SheetTypeInterface';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewPatient, } from '../SheetTypeInterface'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportsService{

  private reconURL = 'https://reconciliation-sheet-service.herokuapp.com/practice-management-reports/reconciliation-sheet/date'
  private newpatientURL = 'http://localhost:5000/newPatientsList'
  private missedAppURL = 'http://localhost:5000/missedAppointmentsList'
  private payerURL =  'http://localhost:5000/payerBasedReportList'//'https://payer-based-report-service.herokuapp.com/practice-management-reports/payer-based-report/date'
  private overdueURL = 'http://localhost:5000/overdueRecordsList'
  private visitingURL = 'http://localhost:5000/patientVisitingList'
  private alertsURL = 'http://localhost:5000/clinicalAlertsList'
  private revenueURL = 'https://revenue-aging-report-service.herokuapp.com/practice-management-reports/revenue-aging-report/date/date'
  

  
  constructor(private http:HttpClient) { }

  getRecon(): Observable<ReconSheet[]> {
    return this.http.get<ReconSheet[]>(this.reconURL)
  }

  getNewPatient(): Observable<NewPatient[]> {
    return this.http.get<NewPatient[]>(this.newpatientURL)
  }

  getMissedApps(): Observable<MissedAppointments[]> {
    return this.http.get<MissedAppointments[]>(this.missedAppURL)
  }

  getOverdueRecords(): Observable<OverdueRecords[]> {
    return this.http.get<OverdueRecords[]>(this.overdueURL)
  }

  getAlerts(): Observable<Alerts[]> {
    return this.http.get<Alerts[]>(this.alertsURL)
  }

  getVisitingList(): Observable<VisitingList[]> {
    return this.http.get<VisitingList[]>(this.visitingURL)
    
  }

  getPayerBased(): Observable<PayerBased[]> {
    return this.http.get<PayerResponse>(this.payerURL).pipe(
      map( x => x.payerBasedReportList), 
      catchError(error => {
        throw new Error(error)
      }))
      
  }
  

  getRevenueAging(): Observable<RevenueAging[]> {
    return this.http.get<RevenueAging[]>(this.revenueURL)
  }


}
