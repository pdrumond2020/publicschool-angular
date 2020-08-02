import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../../school/school.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Grade } from '../grade.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../school/school.service';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-grade-update',
  templateUrl: './grade-update.component.html',
  styleUrls: ['./grade-update.component.css']
})
export class GradeUpdateComponent implements OnInit {
  
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
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private gradeService: GradeService
  ) { }

  ngOnInit(): void {
    this.schools = this.schoolService.read();

    this.gradeForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      schoolId: [null, [Validators.required]]
    })

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const grade$ = this.gradeService.readById(id);

        console.log(grade$)
        grade$.subscribe(grade => {
          this.loadForm(grade);
        });        
      }
    );
  }

  loadForm(grade: Grade): void {
    this.grade = grade;
    this.gradeForm.patchValue({      
      schoolId: grade.schoolId,
      description: grade.description
    })
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.gradeForm.controls[controlName].hasError(errorName);
  }

  update(gradeFormValue): void {
    if (this.gradeForm.valid) {
      this.executeGradeUpdate(gradeFormValue);
    }
  }

  private executeGradeUpdate = (gradeFormValue) => {
    let grade: Grade = {
      description: gradeFormValue.description,
      schoolId: gradeFormValue.schoolId,
      schoolName: null
    }
 
    this.gradeService.update(this.grade).subscribe(() => {
      this.gradeService.showMessage('Turma alterada com sucesso!')
      this.router.navigate(['/grades'])
    })  
  }

  cancel(): void {
    this.router.navigate(['/grades'])
  }

}
