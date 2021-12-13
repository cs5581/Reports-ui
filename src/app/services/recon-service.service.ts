import { MissedAppointments, OverdueRecords, Alerts, OverdueResponse, MissedAppResponse, RevenueResponse, VisitingList, VisitingResponse, PayerBased, RevenueAging, ReconSheet, PayerResponse, ReconResponse, NewPatientResponse, AlertsResponse } from './../SheetTypeInterface';
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
  private payerURL =   'http://localhost:5000/payerBasedReportList'// 'https://payer-based-report-service.herokuapp.com/practice-management-reports/payer-based-report/date'
  private overdueURL = 'http://localhost:5000/overdueRecordsList'
  private visitingURL = 'http://localhost:5000/patientVisitingList'
  private alertsURL = 'http://localhost:5000/clinicalAlertsList'
  private revenueURL = 'https://revenue-aging-report-service.herokuapp.com/practice-management-reports/revenue-aging-report/date/date'
  

  
  constructor(private http:HttpClient) { }

  getRecon(): Observable<ReconSheet[]> {
    return this.http.get<ReconResponse>(this.reconURL).pipe(
      map( x => x.reconciliationSheetBeanList), 
      catchError(error => {
        throw new Error(error)
      }))
    
  }

  getNewPatient(): Observable<NewPatient[]> {
    return this.http.get<NewPatientResponse>(this.newpatientURL).pipe(
      map( x => x.newPatientsList), 
      catchError(error => {
        throw new Error(error)
      }))
  }

  getMissedApps(): Observable<MissedAppointments[]> {
    return this.http.get<MissedAppResponse>(this.missedAppURL).pipe(
      map( x => x.missedAppointmentsList), 
      catchError(error => {
        throw new Error(error)
      }))
  }

  getOverdueRecords(): Observable<OverdueRecords[]> {
    return this.http.get<OverdueResponse>(this.overdueURL).pipe(
      map( x => x.overdueRecordsList), 
      catchError(error => {
        throw new Error(error)
      }))
  }

  getAlerts(): Observable<Alerts[]> {
    return this.http.get<AlertsResponse>(this.alertsURL).pipe(
      map( x => x.clinicalAlertsList), 
      catchError(error => {
        throw new Error(error)
      }))
  }

  getVisitingList(): Observable<VisitingList[]> {
    return this.http.get<VisitingResponse>(this.visitingURL).pipe(
      map( x => x.patientVisitingList), 
      catchError(error => {
        throw new Error(error)
      }))
    
  }

  getPayerBased(): Observable<PayerBased[]> {
    return this.http.get<PayerResponse>(this.payerURL).pipe(
      map( x => x.payerBasedReportList), 
      catchError(error => {
        throw new Error(error)
      }))
      
  }
  

  getRevenueAging(): Observable<RevenueAging[]> {
    return this.http.get<RevenueResponse>(this.revenueURL).pipe(
      map( x => x.revenueAgingReportList), 
      catchError(error => {
        throw new Error(error)
      }))
  }


}
