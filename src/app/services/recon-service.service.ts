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
  private newpatientURL = 'https://new-patient-list-service.herokuapp.com/practice-management-reports/new-patient-list/date'  // 'http://localhost:5000/newPatientsList'
  private missedAppURL = 'https://missed-appointments-service.herokuapp.com/practice-management-reports/missed-appointments/date' // 'http://localhost:5000/missedAppointmentsList'
  private payerURL = 'https://payer-based-report-service.herokuapp.com/practice-management-reports/payer-based-report/date' // 'http://localhost:5000/payerBasedReportList'
  private overdueURL = 'https://overdue-records-service.herokuapp.com/practice-management-reports/overdue-records' // 'http://localhost:5000/overdueRecordsList'
  private visitingURL = 'https://patient-visiting-list-service.herokuapp.com/practice-management-reports/patient-visiting-list/date' // 'http://localhost:5000/patientVisitingList'
  private alertsURL = 'https://clinical-alerts-service.herokuapp.com/practice-management-reports/clinical-alerts/date' //'http://localhost:5000/clinicalAlertsList'
  private revenueURL = 'https://revenue-aging-report-service.herokuapp.com/practice-management-reports/revenue-aging-report/date/date'
  

  
  constructor(private http:HttpClient) { }
  
  getRecon(): Observable<ReconSheet[]> {
    return this.http.get<ReconResponse>(this.reconURL).pipe(
      map( (x: { reconciliationSheetBeanList: any; }) => x.reconciliationSheetBeanList), 
      catchError(error => {
        throw new Error(error)
      }))
    
  }

  getNewPatient(): Observable<NewPatient[]> {
    return this.http.get<NewPatientResponse>(this.newpatientURL).pipe(
      map( (x: { newPatientsList: any; }) => x.newPatientsList), 
      catchError(error => {
        throw new Error(error)
      }))
  }

  getMissedApps(): Observable<MissedAppointments[]> {
    return this.http.get<MissedAppResponse>(this.missedAppURL).pipe(
      map( (x: { missedAppointmentsList: any; }) => x.missedAppointmentsList), 
      catchError(error => {
        throw new Error(error)
      }))
  }

  getOverdueRecords(): Observable<OverdueRecords[]> {
    return this.http.get<OverdueResponse>(this.overdueURL).pipe(
      map( (x: { overdueRecordsList: any; }) => x.overdueRecordsList), 
      catchError(error => {
        throw new Error(error)
      }))
  }

  getAlerts(): Observable<Alerts[]> {
    return this.http.get<AlertsResponse>(this.alertsURL).pipe(
      map( (x: { clinicalAlertsList: any; }) => x.clinicalAlertsList), 
      catchError(error => {
        throw new Error(error)
      }))
  }

  getVisitingList(): Observable<VisitingList[]> {
    return this.http.get<VisitingResponse>(this.visitingURL).pipe(
      map( (x: { patientVisitingList: any; }) => x.patientVisitingList), 
      catchError(error => {
        throw new Error(error)
      }))
    
  }

  getPayerBased(): Observable<PayerBased[]> {
    return this.http.get<PayerResponse>(this.payerURL).pipe(
      map( (x: { payerBasedReportList: any; }) => x.payerBasedReportList), 
      catchError(error => {
        throw new Error(error)
      }))
      
  }
  

  getRevenueAging(): Observable<RevenueAging[]> {
    return this.http.get<RevenueResponse>(this.revenueURL).pipe(
      map( (x: { revenueAgingReportList: any; }) => x.revenueAgingReportList), 
      catchError(error => {
        throw new Error(error)
      }))
  }


}
