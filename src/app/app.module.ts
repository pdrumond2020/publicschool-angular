

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavComponent } from './core/nav/nav.component';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

import { SchoolComponent } from './views/school/school.component';
import { SchoolCreateComponent } from './components/school/school-create/school-create.component';
import { SchoolReadComponent } from './components/school/school-read/school-read.component';
import { SchoolUpdateComponent } from './components/school/school-update/school-update.component';
import { SchoolDeleteComponent } from './components/school/school-delete/school-delete.component';
import { GradeComponent } from './views/grade/grade.component';
import { GradeReadComponent } from './components/grade/grade-read/grade-read.component';
import { GradeCreateComponent } from './components/grade/grade-create/grade-create.component';
import { GradeUpdateComponent } from './components/grade/grade-update/grade-update.component';
import { GradeDeleteComponent } from './components/grade/grade-delete/grade-delete.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SchoolComponent,
    SchoolCreateComponent,
    SchoolReadComponent,
    SchoolUpdateComponent,
    SchoolDeleteComponent,
    GradeComponent,
    GradeReadComponent,
    GradeCreateComponent,
    GradeUpdateComponent,
    GradeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
