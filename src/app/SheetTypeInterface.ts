export interface ReconResponse {

    reconciliationSheetBeanList: ReconSheet[];
}
export interface ReconSheet {
    patientName: string;
    patientID: string;
    doctorID: string;
    specialitySeen: string;
    dateOfBirth: string;
    dateOfAppointment: string;
    timeOfAppointment: string;
    appointmentStatus: string;
    coPay: string;
    paymentAmount: string;
    amountCollected: string;
}

export interface NewPatientResponse {
    newPatientsList: NewPatient[];
}


export interface NewPatient {
    patientName: string;
    patientID: string;
    specialitySeen: string;
    dateOfBirth: string;
    dateOfAppointment: string;
    timeOfAppointment: string;
    appointmentStatus: string;
    coPay: string;
    insurance: string;
    registrationDate: string;
}

export interface MissedAppResponse {

    missedAppointmentsList: MissedAppointments[];

}

export interface MissedAppointments {

    patientName: string;
    patientID: string;
    dateOfAppointment: string;
    timeOfAppointment: string;
    
}

export interface OverdueResponse {
    overdueRecordsList: OverdueRecords[];
}

export interface OverdueRecords {
    patientName: string;
    patientID: string;
    amountOwed: string;
}


export interface AlertsResponse{
    clinicalAlertsList: Alerts[];
}
export interface Alerts {
    patientName: string;
    patientID: string;
    alertTitle: string;
    alertDescription: string;
    
}

export interface VisitingResponse {
    
    patientVisitingList: VisitingList[];
}

export interface VisitingList {
    patientName: string;
    patientID: string;
    dateOfAppointment: string;
    timeOfAppointment: string;
    notes: string;
    medications: string; 
    
}

export interface PayerResponse {
    payerBasedReportList: PayerBased[];
}

export interface PayerBased {
        
    patientName: string;
    patientID: string;    
    amountCollected: string;
    amountOwed: string;
    insurance: string;
   
}

export interface RevenueResponse{
    revenueAgingReportList: RevenueAging[];
}

export interface RevenueAging {
    patientName: string;
    patientID: string;
    amountOwed: string;
    amountDueDate: string;
}
