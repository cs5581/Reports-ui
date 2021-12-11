import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewpatientComponent } from './components/newpatient/newpatient.component';
import { OverdueComponent } from './components/overdue/overdue.component';
import { MissedAppsComponent } from './components/missed-apps/missed-apps.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { VisitingListComponent } from './components/visiting-list/visiting-list.component';
import { PayerBasedComponent } from './components/payer-based/payer-based.component';
import { RevenueAgingComponent } from './components/revenue-aging/revenue-aging.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    HeaderComponent,
    TableComponent,
    NewpatientComponent,
    OverdueComponent,
    MissedAppsComponent,
    AlertsComponent,
    VisitingListComponent,
    PayerBasedComponent,
    RevenueAgingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
