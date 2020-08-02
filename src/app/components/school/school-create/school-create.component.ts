import { Component, OnInit } from '@angular/core';

import { School } from '../school.model';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-school-create',
  templateUrl: './school-create.component.html',
  styleUrls: ['./school-create.component.css']
})
export class SchoolCreateComponent implements OnInit {

  public schoolForm: FormGroup;

  school: School = {
    name: ''
  }

  constructor(private schoolService: SchoolService,
    private router: Router) { }

  ngOnInit(): void {
    this.schoolForm = new FormGroup({
      $key: new FormControl(null),
      name: new FormControl('', Validators.required)
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.schoolForm.controls[controlName].hasError(errorName);
  }

  createSchool(schoolFormValue): void {
    if (this.schoolForm.valid) {
      this.executeSchoolCreation(schoolFormValue);
    }
  }

  private executeSchoolCreation = (schoolFormValue) => {
    let school: School = {
      name: schoolFormValue.name
    }
 
    this.schoolService.create(school).subscribe(() => {
        this.schoolService.showMessage('Escola Pública criada com sucesso!')
        this.router.navigate(['/schools'])
    })    
  }

  cancelSchool(): void {
    this.router.navigate(['/schools'])
  }

}
