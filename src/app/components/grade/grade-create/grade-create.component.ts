import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SchoolService } from '../../school/school.service';
import { GradeService } from './../grade.service';
import { Router } from '@angular/router';
import { Grade } from './../grade.model';
import { School } from './../../school/school.model';

@Component({
  selector: 'app-grade-create',
  templateUrl: './grade-create.component.html',
  styleUrls: ['./grade-create.component.css']
})
export class GradeCreateComponent implements OnInit {

  schools: Observable<School[]>;

  public gradeForm: FormGroup;

  grade: Grade = {
    id: null,
    description: null,
    schoolId: null,
    schoolName: null
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private schoolService: SchoolService,
    private gradeService: GradeService
  ) { }

  ngOnInit(): void {
    this.schools = this.schoolService.read();

    this.gradeForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      schoolId: [null, [Validators.required]]
    })
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.gradeForm.controls[controlName].hasError(errorName);
  }

  create(gradeFormValue): void {
    if (this.gradeForm.valid) {
      this.executeGradeCreation(gradeFormValue);
    }
  }

  private executeGradeCreation = (gradeFormValue) => {
    let grade: Grade = {
      description: gradeFormValue.description,
      schoolId: gradeFormValue.schoolId,
      schoolName: null
    };
 
    this.gradeService.create(grade).subscribe(() => {
        this.gradeService.showMessage('Turma criada com sucesso!')
        this.router.navigate(['/grades'])
    });
  }

  cancel(): void {
    this.router.navigate(['/grades'])
  }

}
