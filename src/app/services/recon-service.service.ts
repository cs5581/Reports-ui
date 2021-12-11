import { MissedAppointments, OverdueRecords, Alerts, VisitingList, PayerBased, RevenueAging, ReconSheet } from './../SheetTypeInterface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewPatient, } from '../SheetTypeInterface'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReportsService{

  private reconURL = 'http://localhost:5000/reconciliationSheetBeanList'
  private newpatientURL = 'http://localhost:5000/newPatientsList'
  private missedAppURL = 'http://localhost:5000/missedAppointmentsList'
  private payerURL = 'http://localhost:5000/payerBasedReportList'
  private overdueURL = 'http://localhost:5000/overdueRecordsList'
  private visitingURL = 'http://localhost:5000/patientVisitingList'
  private alertsURL = 'http://localhost:5000/clinicalAlertsList'
  private revenueURL = 'http://localhost:5000/revenueAgingReportList'


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
    return this.http.get<PayerBased[]>(this.payerURL)
  }

  getRevenueAging(): Observable<RevenueAging[]> {
    return this.http.get<RevenueAging[]>(this.revenueURL)
  }


}

