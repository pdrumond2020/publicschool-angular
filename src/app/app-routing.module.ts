import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { SchoolComponent } from './views/school/school.component'
import { SchoolCreateComponent } from './components/school/school-create/school-create.component';
import { SchoolDeleteComponent } from './components/school/school-delete/school-delete.component';
import { SchoolUpdateComponent } from './components/school/school-update/school-update.component';
import { GradeComponent } from './views/grade/grade.component';
import { GradeCreateComponent } from './components/grade/grade-create/grade-create.component';
import { GradeUpdateComponent } from './components/grade/grade-update/grade-update.component';
import { GradeDeleteComponent } from './components/grade/grade-delete/grade-delete.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'schools',
    component: SchoolComponent
  },
  {
    path: 'school/create',
    component: SchoolCreateComponent
  },
  {
    path: 'school/update/:id',
    component: SchoolUpdateComponent
  },
  {
    path: 'school/delete/:id',
    component: SchoolDeleteComponent
  },
  {
    path: 'grades',
    component: GradeComponent
  },
  {
    path: 'grade/create',
    component: GradeCreateComponent
  },
  {
    path: 'grade/update/:id',
    component: GradeUpdateComponent
  },
  {
    path: 'grade/delete/:id',
    component: GradeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
